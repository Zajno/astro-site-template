import { gsap } from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { isTouchDevice } from './scrollTrigger';

gsap.registerPlugin(ScrollSmoother);

if (!(window as any).DISABLE_SMOOTHER_WRAPPER) {
    ScrollSmoother.create({
        ignoreMobileResize: true,
        // normalizeScroll: isTouchDevice,
        smoothTouch: 0.5,
        speed: isTouchDevice ? 1.2 : 1,
    });
}

export { ScrollSmoother };
