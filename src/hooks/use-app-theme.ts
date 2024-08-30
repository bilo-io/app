
import { ThemeContext, ThemeContextType } from 'data/context/theme-context';
import { useContext, useEffect, useState } from 'react';

import { ITheme, themes } from '../styles/themes';


export const storageKey = 'vision-theme';

export type ThemeName =
  'light' |
  'lightTheme1' |
  'lightTheme2' |
  'lightTheme3' |
  'lightTheme4' |
  'lightTheme5' |
  'dark' |
  'darkTheme1' |
  'darkTheme2' |
  'darkTheme3' |
  'darkTheme4' |
  'darkTheme5' |
  'darkTheme6' |
  'darkTheme7' |
  'darkTheme8' |
  'darkTheme9' |
  'darkTheme10' |
  'darkTheme11' |
  'darkTheme12' |
  'darkTheme13' |
  'darkTheme14' |
  'darkTheme15' |
  'darkTheme16' |
  'darkTheme17' |
  'darkTheme18' |
  'darkTheme19' |
  'darkTheme20' |
  'neonTheme1' |
  'neonTheme2' |
  'neonTheme3' |
  'neonTheme4' |
  'neonTheme5' |
  'neonTheme6' |
  'neonTheme7' |
  'neonTheme8' |
  'neonTheme9' |
  'neonTheme10' |
  'neonTheme11' |
  'neonTheme12' |
  'neonTheme13' |
  'neonTheme14' |
  'neonTheme15' |
  'classicTheme1' |
  'classicTheme2' |
  'classicTheme3' |
  'classicTheme4' |
  'classicTheme5' |
  'vibrantTheme1' |
  'vibrantTheme2' |
  'vibrantTheme3' |
  'vibrantTheme4' |
  'vibrantTheme5' |
  'vibrantTheme6' |
  'vibrantTheme7' |
  'vibrantTheme8' |
  'vibrantTheme9' |
  'vibrantTheme10'


export const setThemeStorage = (type: ThemeName) => {
  // TODO: useContext to set the theme
  localStorage.setItem(storageKey, type);
};

export const toggleTheme = () => {
  const name = localStorage.getItem(storageKey);
  if (name === 'dark') {
    localStorage.setItem(storageKey, 'light');
  } else {
    localStorage.setItem(storageKey, 'dark');
  }

  window.location.reload();
};

export const setTheme = (themeName: ThemeName) => {
  const themeExists = Object.keys(themes).includes(themeName);
  const defaultThemeName: ThemeName = Object.keys(themes)?.[0] as ThemeName;

  localStorage.setItem(storageKey, themeExists ? themeName : defaultThemeName);
  window.location.reload();
};


export const useAppThemeV2 = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useAppTheme = (): {
  name: ThemeName,
  theme: ITheme,
} => {
  const storedTheme: ThemeName = localStorage.getItem(storageKey) as ThemeName;
  const [, setThemeName] = useState<ThemeName>('dark');
  const themeExists = Object.keys(themes).includes(storedTheme);
  // @ts-ignore
  const defaultThemeIndex = Object.keys(themes).find?.((key: string) => themes[key].name === 'Lite Vision');
  // @ts-ignore
  const defaultThemeName: ThemeName = Object.keys(themes)?.[defaultThemeIndex] as ThemeName || 'light';

  const [theme, setTheme] = useState(themeExists ? storedTheme : defaultThemeName);

  useEffect(() => {
    // @ts-ignore
    setTheme(theme);
    // @ts-ignore
    setThemeStorage(theme);
    setThemeName(theme as ThemeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    name: storedTheme,
    theme: themes[storedTheme] as ITheme
  };
};

