import Component, { ComponentConfig } from 'app/core/component';
import gsap from 'gsap';
import { CommonComponents } from '../commonTypes';
import { LazyQueue } from 'app/components/lazy/lazyLoadComponent';

class Preloader extends Component {
    private _smoother: ScrollSmoother = null;
    private _loaderIsActive: boolean = true;

    constructor(el: HTMLElement, smoother?: ScrollSmoother) {
        super({ el } as ComponentConfig);

        this._smoother = smoother;
    }

    doSetup() {
        this.setupAnimItems();
    }

    resize() {
        // TODO
    }

    setupAnimItems() {
        // TODO
    }

    public async show() {
        document.body.classList.add('preloader-active');
        this._smoother?.normalizer?.disable();
        this._smoother?.paused();

        gsap.to(this.element, { autoAlpha: 1 });
    }

    public async hide() {
        document.body.classList.remove('preloader-active');
        this._smoother?.normalizer?.enable();

        gsap.to(this.element, { autoAlpha: 0 });
    }
}

const preloader = new Preloader(document.getElementById(CommonComponents.Preloader));

// If you want hide preloader after some priority.
// LazyQueue.afterPriorityRun.on((prio) => prio === 1 && preloader.hide());

// If you want hide preloader before some priority.
// LazyQueue.beforePriorityRun.on((prio) => prio === 1 && preloader.hide());

// If you want hide preloader after after lazy finished.
LazyQueue.finished.on(() => preloader.hide());
