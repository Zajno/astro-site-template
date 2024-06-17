import Component, { type ComponentConfig } from 'scripts/core/component';
import gsap from 'gsap';
import { ScrollSmoother } from 'scripts/lib/gsap/scrollSmoother';
import { PRELOADER_ACTIVE_CLASS } from 'scripts/utils/constants';
import { scrollToTop } from 'scripts/utils/scrollToTop';

export class Preloader extends Component {
    private _smoother: ScrollSmoother;

    constructor(config: ComponentConfig, smoother?: ScrollSmoother) {
        super(config);

        this._smoother = smoother || ScrollSmoother.get();
    }

    doSetup() {
        this.disableScroll();
    }

    public async show() {
        document.body.classList.add(PRELOADER_ACTIVE_CLASS);
        this.disableScroll();

        gsap.to(this.element, { autoAlpha: 1 });
    }

    public async hide() {
        document.body.classList.remove(PRELOADER_ACTIVE_CLASS);
        this.enableScroll();

        gsap.to(this.element, { autoAlpha: 0 });
    }

    private enableScroll = () => {
        this._smoother?.normalizer?.enable();
    };

    private disableScroll = () => {
        this._smoother?.normalizer?.disable();
        scrollToTop();
    };
}
