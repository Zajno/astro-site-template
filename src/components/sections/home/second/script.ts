
import { Breakpoints } from 'scripts/appBreakpoints';
import Video, { createVideoElement } from 'scripts/components/common/video';
import Section from 'scripts/core/section';
import { inFrames } from 'scripts/utils/inFrames';
import { HomePageSections } from 'components/sections/sectionTypes';
import gsap from 'gsap';
import setupTypeSplit from 'scripts/modules/splitType';
import type SplitType from 'split-type';


export default class SecondSection extends Section {
    private _video: Video;
    private _rem: number;

    private splitedTitle: SplitType;
    private splitedSubTitle: SplitType;
    private get _title() { return this.element.querySelector('h1'); }
    private get _subTitle() { return this.element.querySelector('h2'); }

    async setupSection() {
        this._video = createVideoElement(this.element.querySelector('.video-js'));
        await this._video.setup();

        this.splitedTitle = setupTypeSplit({ targetSplit: this._title, typeSplit: ['chars'] });
        this.splitedSubTitle = setupTypeSplit({ targetSplit: this._subTitle, typeSplit: ['chars'] });
        gsap.set(this.splitedTitle.chars, { autoAlpha: 0 });
        gsap.set(this.splitedSubTitle.chars, { autoAlpha: 0 });
    }

    protected _activate() {
        const timeline = gsap.timeline();

        timeline
            .fromTo(this.splitedTitle.chars, { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, stagger: inFrames(10) }, 0)
            .fromTo(this.splitedSubTitle.chars, { autoAlpha: 0, x: -10 }, { autoAlpha: 1, x: 0, stagger: inFrames(4) }, inFrames(10 * this.splitedTitle.chars.length));
    }

    protected _deactivate() {
        /* TODO */
    }

    public resize() {
        this._rem = Breakpoints.Current.rem;

        // if (this._video) {
        //     this._video.resize(width, height);
        // }
    }
}

let secondSection: SecondSection;

document.addEventListener('astro:page-load', () => {
    const el = document.getElementById(HomePageSections.Second);

    if (!el) {
        return;
    }

    secondSection = new SecondSection({ el });
    secondSection.setup();
});

document.addEventListener('astro:before-preparation', () => {
    if (!secondSection) {
        return;
    }
    secondSection.unmount();
});
