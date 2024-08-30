import { toggleTheme, useAppTheme } from 'hooks';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';

export const ThemeButton = ({
  style
}: {
  style?: React.CSSProperties | undefined
}) => {
  const [isThemeButtonInitialised, setIsThemeButtonInitialised] = useState<boolean>(false);
  const { name: themeName } = useAppTheme();

  const handleClick = () => {
    toggleTheme();
    navigator?.vibrate?.(300);
  };

  useEffect(() => {
    setIsThemeButtonInitialised(true);
  }, []);

  return (
    <FontAwesome name={
      themeName === 'dark'
        ? 'sun'
        : 'moon'}
    style={{
      backgroundColor: themeName === 'dark' ? '#BBB' : '#444',
      // marginLeft: '-2rem',
      // marginTop: '2rem',
      borderRadius: '50%',


      color: themeName === 'dark' ? '#FFD' : '#222',


      cursor: 'pointer',


      fontSize: '1rem',


      height: '2rem',


      opacity: isThemeButtonInitialised ? 1 : 0,


      padding: '0.5rem',
      textShadow: `0px 0px 5px ${themeName === 'dark' ? '#000' : '#FFF'}`,
      transition: 'all 0.5s ease-in-out',
      width: '2rem',
      zIndex: 20,
      // position: 'absolute',
      ...style
    }} onClick={handleClick}
    />
  );
};
