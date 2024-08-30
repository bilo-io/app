/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from 'react';

import './ThemePicker.scss';
import { ThemeName, setTheme, useAppTheme, useTranslations } from 'hooks';
import { themeNames, themes } from 'styles/themes';

import ThemePalette from './ThemePalette';
import Typography from '../Typography/Typography';
import { log } from 'utils/logger';

interface ThemePickerProps {
  id?: string;
  onSelectTheme?: (selectedTheme: keyof typeof themes) => void;
  themeName?: keyof typeof themes | undefined;
  isCustom?: boolean;
  isNavbar?: boolean;
  flyoutDirection?: 'top' | 'bottom';
  showLabel?: boolean;
  showLabelDescription?: boolean;
  showLabelDropdown?: boolean;
  size?: number
}

export const ThemePicker: React.FC<ThemePickerProps> = ({
  id,
  isCustom = true,
  isNavbar = false,
  flyoutDirection = 'top',
  // showLabel = true,
  showLabelDescription = false,
  showLabelDropdown,
  size = 30
}) => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const { theme, name: themeName,
    // setTheme
  } = useAppTheme();
  const { t } = useTranslations();
  const flyoutRef = useRef<HTMLDivElement | null>(null);

  const handleThemeChange = (selectedValue: keyof typeof themes): void => {
    // setTheme(selectedValue);
    setIsFlyoutOpen(false);
    log({ theme: selectedValue, themeName });
    setTheme(selectedValue);
  };

  const toggleFlyout = (): void => {
    setIsFlyoutOpen(!isFlyoutOpen);
  };

  // Close the flyout when clicking outside
  const handleClickOutside = (event: MouseEvent): void => {
    if (flyoutRef.current && !flyoutRef.current.contains(event.target as Node)) {
      setIsFlyoutOpen(false);
    }
  };

  // Attach click outside event listener when flyout is open
  useEffect(() => {
    if (isFlyoutOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlyoutOpen]);

  const themeOptions = themeNames.map((key) => ({
    label: key.replace(/([A-Z])/g, ' $1').trim(),
    value: key as keyof typeof themes
  }));
  //   const themeOptions = [
  //     {
  //       value: 'dark',
  //       label: t.account['dark'] as string
  //     },
  //     {
  //       value: 'light',
  //       label: t.account['light'] as string
  //     }
  //   ]

  const selectedThemeOption = themeOptions.find(option => option.value === themeName);

  return (
    <div className="relative bg-transparent">
      <div ref={flyoutRef} className="relative">
        {isCustom ? (
          <div onClick={toggleFlyout} className="cursor-pointer flex flex-row items-center my-2">
            {/* @ts-ignore */}
            <ThemePalette themeName={selectedThemeOption?.value ?? 'light'} size={size} />
            <Typography className={showLabelDescription ? 'ml-4' : ''} color={theme?.TEXT}>
              {showLabelDescription ? t.account?.chooseTheme : ''}
            </Typography>
          </div>
        ) : (
          <select
            id={`theme-picker-${id}`}
            className="block w-full px-2 py-2 focus:outline-none bg-transparent"
            value={themeName || ''}
            onChange={(e) => handleThemeChange(e.target.value as keyof typeof themes)}
          >
            {themeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label.toUpperCase()}
              </option>
            ))}
          </select>
        )}
        {isFlyoutOpen && isCustom && (
          <div
            className={`absolute no-scrollbar rounded-lg ${showLabelDropdown ? 'left-0' : '-left-2'} z-10 ${flyoutDirection === 'top' ? 'bottom-full' : 'top-full mt-2'}`}
            style={{
              // @ts-ignore
              backgroundColor: themes[(selectedThemeOption?.value ?? 'light') as ThemeName]?.APP_BACKGROUND,

              maxHeight: '400px',

              overflowY: 'auto',
              width: showLabelDescription ? '14rem' : showLabelDropdown ? '8rem' : isNavbar ? '3rem' : '3.5rem'
            }}
          >
            {themeOptions.map((option) => (
              <div
                key={option.value}
                onClick={(): void => handleThemeChange(option.value as ThemeName)}
                className={`cursor-pointer flex items-center ${showLabelDescription ? 'justify-start px-2' : 'justify-center px-0'} py-2 hover:bg-primary`}
              >
                {/* @ts-ignore */}
                <ThemePalette themeName={option?.value as ThemeName} size={28} />
                <Typography className={showLabelDescription ? 'ml-5' : ''} color={theme?.TEXT}>
                  {showLabelDescription ? themes?.[option.value as ThemeName]?.name : ''}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </div >
  );
};

export default ThemePicker;
