import { SupportedLanguages } from 'data/translations';
import React, { useEffect, useRef, useState } from 'react';

import { languageOptions } from './LanguagePicker.utils';

import './LanguagePicker.scss';
import { useAppLanguage, useAppTheme } from 'hooks';

import FlagIcon from '../Icon/FlagIcon/FlagIcon';
import Typography from '../Typography/Typography';

interface LanguagePickerProps {
  id?: string;
  onSelectLanguage?: (selectedLanguage: SupportedLanguages) => void;
  language?: SupportedLanguages | undefined;
  isCustom?: boolean;
  flyoutDirection?: 'top' | 'bottom';
  showLabel?: boolean,
  showLabelDropdown?: boolean,
  size?: number
}

export const LanguagePicker: React.FC<LanguagePickerProps> = ({
  id,
  isCustom,
  flyoutDirection = 'top',
  showLabel = true,
  showLabelDropdown,
  size = 30,
}) => {
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const { language, setLanguage } = useAppLanguage();
  const { theme } = useAppTheme();
  const flyoutRef = useRef<HTMLDivElement | null>(null);

  const handleLanguageChange = (selectedValue: SupportedLanguages) => {
    setLanguage(selectedValue);
    setIsFlyoutOpen(false);
  };

  const toggleFlyout = (): void => {
    setIsFlyoutOpen(!isFlyoutOpen);
  };

  // Close the flyout when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
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

  const selectedLanguageOption = languageOptions.find(option => option.value === language);

  return (
    <div className="relative bg-transparent">
      <div ref={flyoutRef} className="relative" onClick={toggleFlyout}>
        {isCustom ? (
          <div
            className={`cursor-pointer flex flex-row ${showLabel ? 'items-center' : ''} my-2`}
          >
            <FlagIcon alpha2={selectedLanguageOption?.flag} size={size} />

            {showLabel ? (
              <Typography className={showLabel ? 'ml-4' : ''}>
                {showLabel ? selectedLanguageOption?.label : ''}
                <Typography className={showLabel ? 'ml-2' : ''} weight="600">{showLabel ? `(${selectedLanguageOption?.value?.toUpperCase()})` : ''}</Typography>
              </Typography>
            ) : null}
          </div>
        ) : (
          <select
            id={`language-picker-${id}`}
            className="block w-full px-2 py-2 focus:outline-none bg-transparent"
            value={language || ''}
            onChange={(e) => handleLanguageChange(e.target.value as SupportedLanguages)}
          >
            {languageOptions.map((option) => (
              <option key={option.value as string} value={option.value}>
                {option.icon} {option.value?.toUpperCase()}
              </option>
            ))}
          </select>
        )}
        {isFlyoutOpen && isCustom && (
          <div
            className={`absolute no-scrollbar rounded-lg ${showLabelDropdown ? 'left-0' : '-left-3'} z-10 ${flyoutDirection === 'top' ? 'bottom-full' : 'top-full mt-2'}`}
            style={{
              backgroundColor: theme?.APP_BACKGROUND,
              maxHeight: '260px',
              overflowY: 'auto',
              width: showLabelDropdown ? '8rem' : '3.5rem',
            }} // Ensure the flyout never goes offscreen
          >
            {languageOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => handleLanguageChange(option.value as SupportedLanguages)}
                className="cursor-pointer flex items-center px-1 py-2 hover:bg-primary"
              >
                <FlagIcon alpha2={option.flag} size={20} />
                <Typography size={showLabelDropdown ? 'sm' : 'xs'} className="ml-2">
                  {showLabelDropdown ? `(${option.value?.toUpperCase()}) ${option.label}` : option.value?.toUpperCase()}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguagePicker;
