import React from 'react';
import './Slideshow.scss';

export interface SlideProps {
  children: any;
  style?: any,
  theme?: 'dark' | 'light' | 'primary';
}

export const Slide: React.FC<SlideProps> = ({
  children,
  style,
  theme = 'light',
}) => (
  <div className={`slide-panel ${theme || ''}`} style={style}>
    {children}
  </div>
);

