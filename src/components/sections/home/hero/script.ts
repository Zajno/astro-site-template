import Section from 'scripts/core/section';
import { inFrames } from 'scripts/utils/inFrames';
// import { setupManyComponents } from 'scripts/utils/setupManyComponents';
import { HomePageSections } from 'components/sections/sectionTypes';
import gsap from 'gsap';
import type SplitType from 'split-type';
import setupTypeSplit from 'scripts/modules/splitType';


export default class HeroSection extends Section {
    private isActivated: boolean;

    private splitedTitle: SplitType;
    private splitedSubTitle: SplitType;

    private get _title() { return this.element.querySelector('h1'); }
    private get _subTitle() { return this.element.querySelector('h2'); }

    async setupSection() {
        this.splitedTitle = setupTypeSplit({ targetSplit: this._title, typeSplit: ['chars'] });
        this.splitedSubTitle = setupTypeSplit({ targetSplit: this._subTitle, typeSplit: ['chars'] });
        gsap.set(this.splitedTitle.chars, { autoAlpha: 0 });
        gsap.set(this.splitedSubTitle.chars, { autoAlpha: 0 });


    }

    protected _activate() {
        if (this.isActivated) {
            return;
        }
        const timeline = gsap.timeline({ onStart: () => this.isActivated = false });

        timeline
            .fromTo(this.splitedTitle.chars, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, stagger: inFrames(10) }, 0)
            .fromTo(this.splitedSubTitle.chars, { autoAlpha: 0, x: -10 }, { autoAlpha: 1, x: 0, stagger: inFrames(4) }, inFrames(10 * this.splitedTitle.chars.length));
    }

    protected _deactivate() {
        /* TODO */
    }
}

let heroSection: HeroSection;

document.addEventListener('astro:page-load', () => {
    const el = document.getElementById(HomePageSections.Hero);

    if (!el) {
        return;
    }

    heroSection = new HeroSection({ el });
    heroSection.setup();
});

document.addEventListener('astro:before-preparation', () => {
    if (!heroSection) {
        return;
    }
    heroSection.unmount();
});


// Setup scripts for same sections.

// setupManyComponents(HeroSection, [
//     document.getElementById(HomePageSections.Hero),
//     document.getElementById(HomePageSections.Hero),
// ]);
