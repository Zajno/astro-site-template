import SplitType, { type TypesList } from 'split-type';

type SplitTypeConfig = {
    targetSplit: string | HTMLElement;
    typeSplit?: TypesList;
    isOverflow?: boolean;
    elementClassOverflow?: string;
    elementClassWrapper?: string;
};

export default function setupTypeSplit(config: SplitTypeConfig): SplitType {

    const {
        targetSplit,
        isOverflow = false,
        typeSplit = ['lines'],
        elementClassOverflow = 'line-overflow',
    } = config;
    // TypeSplit setup main
    const splitType = new SplitType(targetSplit, {
        types: typeSplit,
        tagName: 'span',
        lineClass: 'js-title-line',
    });

    if(isOverflow){
        // TypeSplit setup lines
        const lines = document.querySelectorAll('.js-title-line');
        lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.classList.add(elementClassOverflow);

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });
        //
    }
    return splitType;
}
