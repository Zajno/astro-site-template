import Component, { type ComponentConfig } from 'scripts/core/component';
import gsap from 'gsap';
import { ScrollSmoother } from 'scripts/lib/gsap/scrollSmoother';
import { CommonComponents } from '../commonTypes';
import { LazyQueue } from 'scripts/components/lazy/lazyLoadComponent';
import { oneTimeSubscription } from '@zajno/common/observing/event';
import { setTimeoutAsync, timeoutPromise } from '@zajno/common/async/timeout';
import { PRELOADER_ACTIVE_CLASS } from 'scripts/utils/constants';
import { PreloadEvent } from 'scripts/modules/pageEvents';
import { scrollToTop } from 'scripts/utils/scrollToTop';
import { Breakpoints } from 'scripts/appBreakpoints';

export const MAX_WAIT_TIME = 10_000;
export const MIN_WAIT_TIME = 1_000;

const TARGET_LAZY_PRIORITY = 10;
const TARGET_LAZY_PRIORITY_MOBILE = 20;

class Preloader extends Component {
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

(async () => {
    const el = document.getElementById(CommonComponents.Preloader);
    if (!el) {
        PreloadEvent.trigger();
        return;
    }

    const preloader = await new Preloader({ el }).setup();

    const targetLazyPriority = Breakpoints.isDesktop
        ? TARGET_LAZY_PRIORITY
        : TARGET_LAZY_PRIORITY_MOBILE;
    const nextTargetLazyPriority = targetLazyPriority + 1;

    // add dummy lazy task for target priority just to 100% get event for it
    LazyQueue.enqueue(() => Promise.resolve(), targetLazyPriority);

    // pause all items after target priority preloader exit smoother
    LazyQueue.enqueue(() => setTimeoutAsync(2000), nextTargetLazyPriority);

    timeoutPromise(oneTimeSubscription(LazyQueue.afterPriorityRun, p => p >= targetLazyPriority), MAX_WAIT_TIME, MIN_WAIT_TIME)
        .then(async ({ timedOut, elapsed }) => {

            if (timedOut) {
                // eslint-disable-next-line no-console
                console.warn('Preloader timed out, elapsed =', elapsed);
            }

            await preloader.hide();
            PreloadEvent.trigger();
        });
})();
