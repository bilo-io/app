import { useAppTheme } from 'hooks';
import React from 'react';
import './Footer.scss';

export const Footer = ({
  children,
  hasTheme,
  hasContent,
}: {
    children?: any,
    hasTheme?: boolean;
    hasContent?: boolean;
  }) => {
  const { name: themeName } = useAppTheme();

  return hasContent
    ? (
      <footer className="footer">
        <div className={'waves'}>
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave1" />
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave2" />
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave3" />
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave4" />
        </div>
        {children}
      </footer>
    )
    : (
      <div className="footer no-content">
        <div className={'waves'}>
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave1" />
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave2" />
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave3" />
          <div className={`wave ${hasTheme ? themeName : ''}`} id="wave4" />
        </div>
      </div>
    );
};
