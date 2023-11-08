import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export { SplitText };

export const splitLinesClass = 'split-lines';

export const defaultSplitTextConfig = {
    type: 'lines',
    linesClass: splitLinesClass,
};
