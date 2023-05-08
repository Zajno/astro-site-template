import type { PageCopyright } from '../types';
import { FooterEnCopy } from './en';
import { FooterJaCopy } from './ja';

export type FooterCopyrightShape = typeof FooterEnCopy;

export const FooterCopyright: PageCopyright<FooterCopyrightShape> = {
    en: FooterEnCopy,
    ja: FooterJaCopy,
};
