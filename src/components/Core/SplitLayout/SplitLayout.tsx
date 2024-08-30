import React from 'react';
import SplitPane from 'react-split-pane';

export const SplitLayout = ({
  hasNoPadding,
  children
}: {
  hasNoPadding?: boolean,
  children: React.ReactElement | React.ReactElement[]
}) => (
  <div className="w-full h-screen testing-this-one">
    {/* @ts-ignore */}
    <SplitPane
      split="vertical"
      allowResize
      defaultSize={`${parseInt(localStorage.getItem('splitPos') as string, 10)}px`}
      size={`${parseInt(localStorage.getItem('splitPos') as string, 10) || 320}px`}
      onChange={(size: number) => {
        localStorage.setItem('splitPos', size?.toString());
      }}
      minSize={44}
      maxSize={256}
      className={`w-full h-full ${hasNoPadding ? '' : 'pt-0'}`}
      style={{
        height: hasNoPadding ? 'calc(100% - 0rem)' : '100%'
      }}
    >
      {children}
    </SplitPane>
  </div>
);

export default SplitLayout;