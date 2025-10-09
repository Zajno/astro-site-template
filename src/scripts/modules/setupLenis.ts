import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Breakpoints } from 'scripts/appBreakpoints';
import { createLogger } from 'scripts/logger';
const logger = createLogger('[setupLenis]');

declare global {
    interface Window {
        lenis: Lenis;
    }
}

type LenisConfig = {
    wheelMultiplier?: number;
    gestureOrientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    touchMultiplier?: number;
    duration?: number;
};

gsap.registerPlugin(ScrollTrigger);

export default class LenisManager {
    private static instance: Lenis;

    private constructor(_config?: LenisConfig) {
        if (!Breakpoints.isDesktop) return;
        if (!window.lenis) {
            window.lenis = new Lenis({
                wheelMultiplier: 0.7,
                gestureOrientation: 'vertical',
                smoothWheel: true,
                touchMultiplier: 0.7,
                duration: 1.1,
            });

            logger.log('Lenis initialized:', window.lenis);

            window.lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time) => {
                window.lenis?.raf(time * 1000);
            });

            gsap.ticker.lagSmoothing(0);
        }

        LenisManager.instance = window.lenis;
    }

    static getInstance(_config?: LenisConfig): Lenis {
        if (!LenisManager.instance) {
            new LenisManager(_config);
        }
        return LenisManager.instance;
    }
}

export function getLenis(): Lenis {
    return LenisManager.getInstance();
}

