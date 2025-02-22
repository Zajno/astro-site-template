import type { PageCopyright } from '../types';
import { modalMenuEnCopy } from './en';
import { modalMenuJaCopy } from './ja';

export type ModalMenuCopyrightShape = typeof modalMenuEnCopy;

export const ModalMenuCopyright: PageCopyright<ModalMenuCopyrightShape> = {
    en: modalMenuEnCopy,
    ja: modalMenuJaCopy,
};
