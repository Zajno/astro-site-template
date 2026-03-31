import type { PageCopyright } from '../types';
import { AboutEnCopy } from './en';
import { AboutJaCopy } from './ja';

export type AboutCopyrightShape = typeof AboutEnCopy;

export const AboutCopyright: PageCopyright<AboutCopyrightShape> = {
    en: AboutEnCopy,
    ja: AboutJaCopy,
};
