
import { Breakpoints } from 'scripts/appBreakpoints';
import Video from 'scripts/components/common/video';
import Section from 'scripts/core/section';
import { inFrames } from 'scripts/utils/inFrames';
import { HomePageSections } from 'components/sections/sectionTypes';
import gsap from 'gsap';
import { SplitText } from 'scripts/lib/gsap/splitText';

export default class SecondSection extends Section {
    private _video: Video;
    private _rem: number;

    private splitedTitle: SplitText;
    private splitedSubTitle: SplitText;
    private get _title() { return this.element.querySelector('h1'); }
    private get _subTitle() { return this.element.querySelector('h2'); }

    async setupSection() {
        // this._video = await new Video({ el: this.element.querySelector('.video-js') }).setup();

        this.splitedTitle = new SplitText(this._title);
        this.splitedSubTitle = new SplitText(this._subTitle);
        gsap.set([this.splitedTitle.chars, this.splitedSubTitle.chars], { autoAlpha: 0 });
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

new SecondSection({ el: document.getElementById(HomePageSections.Second) }).setup();
