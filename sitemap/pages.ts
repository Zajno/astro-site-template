import { AboutCopyright, AboutCopyrightShape } from './copyright';
import { HomeCopyright, HomeCopyrightShape } from './copyright';
import { SitePage } from './types';

export const HomePage: SitePage<HomeCopyrightShape> = {
    id: 'home',
    href: '/',
	title: 'Home Page | Zajno Digital Design Agency',
	description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
    copy: HomeCopyright,
};

export const AboutPage: SitePage<AboutCopyrightShape> = {
    id: 'about',
    href: '/about',
	title: 'About Page | Zajno Digital Design Agency',
	description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
    copy: AboutCopyright,
};

export const Page404: SitePage = {
    id: '404',
    href: '/404',
	title: 'Page Not Found',
	description: '',
    copy: undefined,
    disableScripts: true,
};

export const NotSupported: SitePage = {
    id: 'not-supported',
    href: '/not-supported',
	title: '',
	description: '',
    copy: undefined,
    disableScripts: true,
};

export const NoScript: SitePage = {
    id: 'no-script',
    href: '/no-script',
	title: 'Enable JavaScript',
	description: 'This website requires scripts to be enabled/allowed in your browser.',
    copy: undefined,
    noIndex: true,
    disableScripts: 'force',
};

export const NoScriptId = NoScript.id;

const pages: SitePage[] = [
    HomePage,
    AboutPage,
    Page404,
    NotSupported,
    NoScript,
];

export default pages;
