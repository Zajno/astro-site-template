import { Breakpoints } from 'app/appBreakpoints';
import Component, { ComponentConfig } from './component';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type SectionConfig = ComponentConfig;

export default class Section<TConfig extends SectionConfig = SectionConfig> extends Component<TConfig> {
    private _sectionTrigger: ScrollTrigger = null;

    get sectionTrigger() { return this._sectionTrigger; }

    constructor(config: TConfig) {
        super(config);
    }

    protected async doSetup() {
        Breakpoints.resizeEvent.on((sizes) => this.resize(sizes.width, sizes.height));

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
    public wheel(deltaY: number, wheelDirection: number) {
        /* override me if you want */
    }
}
