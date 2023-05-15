import { AboutCopyright, AboutCopyrightShape } from './copyright';
import { HomeCopyright, HomeCopyrightShape } from './copyright';
import { SitePage } from './types';

export enum PagesRoutes {
    Home = '/',
    About = '/about',
    Error404 = '/404',
    NotSupported = '/not-supported',
    NoScript = '/no-script'
}

export const HomePage: SitePage<HomeCopyrightShape> = {
    id: 'home',
    href: PagesRoutes.Home,
	title: 'Home Page | Zajno Digital Design Agency',
	description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
    copy: HomeCopyright,
};

export const AboutPage: SitePage<AboutCopyrightShape> = {
    id: 'about',
    href: PagesRoutes.About,
	title: 'About Page | Zajno Digital Design Agency',
	description: 'Full-service digital design and development agency specializing in UX/UI design, crafting thought-out personalized experiences for web and mobile.',
    copy: AboutCopyright,
};

export const Page404: SitePage = {
    id: '404',
    href: PagesRoutes.Error404,
	title: 'Page Not Found',
	description: '',
    copy: undefined,
    disableScripts: true,
};

export const NotSupported: SitePage = {
    id: 'not-supported',
    href: PagesRoutes.NotSupported,
	title: '',
	description: '',
    copy: undefined,
    disableScripts: true,
};

export const NoScript: SitePage = {
    id: 'no-script',
    href: PagesRoutes.NoScript,
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
