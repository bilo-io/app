import { ThemeName, useAppTheme } from 'hooks';
import React from 'react';

const Section = ({
  children,
  variant,
  style,
  className,
  isBlurred,
  isCentered,
  isSecondary,
}: {
  children: any,
  variant?: ThemeName,
  style?: any,
  className?: string,
  isBlurred?: boolean;
  isCentered?: boolean;
  isSecondary?: boolean
}) => {
  const { theme } = useAppTheme();
  const getColors = (type?: string) => {
    switch (variant) {
    case 'light':
      return {
        background: isSecondary ? '#EEF' : '#FFF',
        text: '#000'
      };
    case 'dark':
      return {
        background: isSecondary ? '#112' : '#000',
        text: '#FFF'
      };
    default: return {
      background: 'transparent',
      text: '#FFF'
    };
    }
  };

  const colors = getColors(variant);

  return (
    <div className={`flex flex-col items-center ${className}`} style={{
      backdropFilter: isBlurred ? 'blur(3px)' : 'blur(0px)',
      backgroundColor: colors.background,
      color: colors.text,
      minHeight: '4rem',
      width: '100vw',
      ...style,
    }}>
      {isBlurred ? <div className="flex flex-col items-center" style={{

        backdropFilter: 'blur(3px)',


        backgroundColor: `${theme?.BACKGROUND}CC`,
        // minHeight: '10vh',
        height: 'inherit',
        width: '100vw'
      }}>
        <div style={{
          backgroundColor: isCentered ? 'transparent' : 'transparent',
          //isCentered ? 'max100vw' : '100vw',
          margin: isCentered ? 'auto' : style?.margin,

          maxWidth: '100vw',

          width: isCentered ? '60rem' : '100vw',
        }}>
          {children}
        </div>
      </div> : <div style={{
        backgroundColor: isCentered ? 'transparent' : 'transparent',
        //isCentered ? 'max100vw' : '100vw',
        margin: isCentered ? 'auto' : style?.margin,

        maxWidth: '100vw',

        width: isCentered ? '60rem' : '100vw',
      }}>
        {children}
      </div>}
    </div>
  );
};

export default Section;
