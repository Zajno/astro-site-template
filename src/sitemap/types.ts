import type { Locales } from './copyright';

export type SitePage<TCopy = any> = {
    /** unique page ID */
	id: string | number;
    /** page's title, also used in meta */
	title?: string;
    /** page's description for meta */
	description?: string;
    /** page's meta image, relative to `assets/img` folder */
	image?: string;
    /** how this instance should be referenced via URL, relative path */
    href: string,
	// canonical?: string;
    /** page's locale */
	locale: Locales;
    /** page's copy, usually a structured object specific for this page type */
    copy: TCopy,
	noIndex?: boolean;
	disableScripts?: boolean | 'force';
}
