import { ThemeName } from 'hooks';
import React, { ReactNode, createContext, useState } from 'react';
import { ITheme, themes } from 'styles/themes';

export interface ThemeContextType {
    name: ThemeName,
    theme: ITheme;
    setTheme: any;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(themes.light as ITheme);
  const [name,] = useState<ThemeName>('light');

  return (
    <ThemeContext.Provider value= {{ name, setTheme, theme }
    }>
      {children}
    </ThemeContext.Provider>
  );
};