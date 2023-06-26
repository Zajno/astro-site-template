import Section from 'app/core/section';
import { inFrames } from 'app/utils/inFrames';
import { setupManyComponents } from 'app/utils/setupManyComponents';
import { HomePageSections } from 'components/sections/sectionTypes';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default class HeroSection extends Section {
    private isActivated: boolean;

    private splitedTitle: SplitText;
    private splitedSubTitle: SplitText;

    private get _title() { return this.element.querySelector('h1'); }
    private get _subTitle() { return this.element.querySelector('h2'); }

    async setupSection() {
        this.splitedTitle = new SplitText(this._title);
        this.splitedSubTitle = new SplitText(this._subTitle);
        gsap.set([this.splitedTitle.chars, this.splitedSubTitle.chars], { autoAlpha: 0 });
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

new HeroSection({ el: document.getElementById(HomePageSections.Hero) }).setup();

// Setup scripts for same sections.

// setupManyComponents(HeroSection, [
//     document.getElementById(HomePageSections.Hero),
//     document.getElementById(HomePageSections.Hero),
// ]);
