import Component, { ComponentConfig } from './component';
import type { IPage } from './page';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type Directions = 'up' | 'down';
export type SectionActions = 'show' | 'hide';

export type ActivationCoeffs = {
    show: number,
    hide: number,
};

// type A = { a: string, b: number };
// type Aa = keyof A;

// const t: Partial<A>;

export type ActivationDirectCoeffs = {
    [k1 in Directions]: {
        [k2 in SectionActions]: number;
    };
};

export interface SectionConfig extends ComponentConfig {
    page: IPage;
}

export interface SectionCtor<TConfig extends SectionConfig = SectionConfig> {
    new(config: TConfig): Section<TConfig>;
}

export default class Section<TConfig extends SectionConfig = SectionConfig>
    extends Component<TConfig> {
    protected _scrollCoeffs: ActivationDirectCoeffs = {
        down: {
            show: 0.3,
            hide: 0.5,
        },
        up: {
            show: 0.3,
            hide: 0.3,
        },
    };

    private _scrollPosition = 0;
    private _sectionTrigger: ScrollTrigger = null;

    get page() { return this._config.page; }
    get scrollCoeffs(): Readonly<ActivationDirectCoeffs> { return this._scrollCoeffs; }
    get scrollPosition() { return this._scrollPosition; }

    // override with 0.5 for small sections
    get fallbackTreshold() { return 0; }

    protected async doSetup() {
        if (this.element && this.element.style) {
            this.element.style.visibility = 'visible';
        }

        await this.setupSection();

        if (this.element) {
            this._setupScrollTrigger();
        }
    }

    private async _setupScrollTrigger() {
        this._sectionTrigger = ScrollTrigger.create({
            trigger: this.element,
            start: 'top bottom-=10%',
            end: 'bottom top-=10%',
            scrub: true,
            onEnter: () => this.activate(),
            onEnterBack: () => this.activate(),
            onUpdate: () => this.activate(),
            onLeave: () => this.deactivate(),
            onLeaveBack: () => this.deactivate(),
        });
    }

    protected setupSection(): Promise<void> | void {
        /* override me if you want */
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public resize(width: number, height: number) {
        /* override me if you want */
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public scroll(scrollPosition: number, scrollDirection: number) {
        const rect = this.rect;
        const totalHeight = this.page.height + rect.height;
        const yPos = totalHeight - rect.bottom;
        this._scrollPosition = yPos / totalHeight;
        // console.log(this,'___scrol section')
        /* override me if you want */
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public wheel(deltaY: number, wheelDirection: number) {
        /* override me if you want */
    }

    get animateOnSetup() { return true; }

    get logAnimation() { return true; }
}
