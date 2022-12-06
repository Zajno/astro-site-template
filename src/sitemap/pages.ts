import { AboutCopyright, AboutCopyrightShape } from './copyright';
import { HomeCopyright, HomeCopyrightShape } from './copyright';
import { SitePage } from './types';

export const HomePage: SitePage<HomeCopyrightShape> = {
    id: 'home',
    href: '/',
	title: 'Home Page | Zajno Digital Design Agency',
	description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
    locale: HomeCopyright.default,
    copy: HomeCopyright[HomeCopyright.default],

    // TODO: Add what needed
    // i18n: [ // looks similar but in future more fields can be different
    //     { locale: 'en', href: '/en', path: 'en/index.html', copy: HomeCopyright.en },
    //     { locale: 'ja', href: '/ja', path: 'ja/index.html', copy: HomeCopyright.ja },
    //     { locale: 'ko', href: '/ko', path: 'ko/index.html', copy: HomeCopyright.ko },
    // ],
};

export const AboutPage: SitePage<AboutCopyrightShape> = {
    id: 'about',
    href: '/about',
	title: 'About Page | Zajno Digital Design Agency',
	description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
    locale: AboutCopyright.default,
    copy: AboutCopyright[AboutCopyright.default],
};

export const Page404: SitePage = {
    id: '404',
    href: '/404',
	title: 'Page Not Found',
	description: '',
    locale: 'en',
    copy: undefined,
    disableScripts: true,
};

export const NotSupported: SitePage = {
    id: 'not-supported',
    href: '/not-supported',
	title: '',
	description: '',
    locale: 'en',
    copy: undefined,
    disableScripts: true,
};

export const NoScript: SitePage = {
    id: 'no-script',
    href: '/no-script',
	title: 'Enable JavaScript',
	description: 'This website requires scripts to be enabled/allowed in your browser.',
    locale: 'en',
    copy: undefined,
    noIndex: true,
    disableScripts: 'force',
};

export const NoScriptId = NoScript.id;

// export const Dependencies: PageDependency[] = [
//     { name: 'polyfills', import: './app/scripts/polyfills', critical: true },
// ];

const pages: SitePage[] = [
    HomePage,
    AboutPage,
    Page404,
    NotSupported,
    NoScript,
];

export default pages;
