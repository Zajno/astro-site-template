import type { SectionCtor } from 'app/core/section';
import CommonPage from './commonPage';

import HeroSection from 'app/sections/HeroSection';
import TabSection from 'app/sections/TabsSection';

export default class AboutPage extends CommonPage {
    _sectionTypes: SectionCtor[] = [
        HeroSection,
        TabSection,
    ];

    async setupPageAsync() {
        await super.setupPageAsync();
    }

    get sectionTypes() {
        return this._sectionTypes;
    }

}

AboutPage.RunPage(AboutPage);
