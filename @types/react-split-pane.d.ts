/// <reference types="react-split-pane" />

import { PureComponent, ReactNode, CSSProperties } from 'react';

declare module 'react-split-pane/lib/Pane' {
    type PaneProps = {
        children?: ReactNode;
        innerRef?: (index: number, element: HTMLElement) => void;
        index?: number;
        className?: string;
        initialSize?: string | number;
        minSize?: string;
        maxSize?: string;
        split?: 'vertical' | 'horizontal';
        size?: string | number;
        resizersSize?: number;
    };

    class Pane extends PureComponent<PaneProps> { }

    export default Pane;
}
