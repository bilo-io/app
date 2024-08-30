import React from 'react';
import './Marquee.scss';

export const Marquee: React.FC<{
    children: React.ReactNode
}
> = ({
  children,
}) => (
  <div className="moving-text">
    {children}
  </div>
);
