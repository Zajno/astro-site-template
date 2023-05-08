import Component, { ComponentConfig } from 'app/core/component';
import gsap from 'gsap';
import { CommonComponents } from '../commonTypes';
import { LazyQueue } from 'app/components/lazy/lazyLoadComponent';
import { oneTimeSubscription } from '@zajno/common/observing/event';
import { timeoutPromise } from '@zajno/common/async/timeout';

class Preloader extends Component {
    private _smoother: ScrollSmoother = null;

    constructor(config: ComponentConfig, smoother?: ScrollSmoother) {
        super(config);

        this._smoother = smoother;
    }

    doSetup() {
        // TODO
    }

    resize() {
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
const maxWaitTime = 10000;
const minWaitTime = 1000;

const preloader = new Preloader({ el: document.getElementById(CommonComponents.Preloader) });

// If you want hide preloader after some priority.
// await timeoutPromise(oneTimeSubscription(LazyQueue.afterPriorityRun, (prio) => prio === 0), maxWaitTime, minWaitTime)
//         .then(() => preloader.hide());

// If you want hide preloader before some priority.
// await timeoutPromise(oneTimeSubscription(LazyQueue.beforePriorityRun, (prio) => prio === 0), maxWaitTime, minWaitTime)
//         .then(() => preloader.hide());

// If you want hide preloader after after lazy finished.
await timeoutPromise(oneTimeSubscription(LazyQueue.finished), maxWaitTime, minWaitTime)
    .then(() => preloader.hide());
