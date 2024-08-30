import { AppGradientIcon } from 'components/App';
import { Input } from 'components/Core';
import { useAppTheme } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';

interface MenuOption {
    label: string;
    onClick: () => void;
}

export const AIAssistant: React.FC = () => {
  const { theme } = useAppTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options: MenuOption[] = [
    {
      label: 'Option 1',
      onClick: () => alert('Option 1 clicked'),
    },
    {
      label: 'Option 2',
      onClick: () => alert('Option 2 clicked'),
    },
    {
      label: 'Option 3',
      onClick: () => alert('Option 3 clicked'),
    },
    {
      label: 'Option 4',
      onClick: () => alert('Option 4 clicked'),
    }
  ];

  const backgroundColor = `${theme?.BACKGROUND}99`;

  return (
    <div className="fixed right-4 bottom-4">

      <AppGradientIcon onClick={toggleMenu} size={32} isRound />

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-16 right-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
          style={{
            backgroundColor,
            color: theme?.TEXT,
          }}
        >
          <div className="p-2" style={{
            backgroundColor,
          }}>
            <Input
              type="text"
              className="w-full px-2 py-1 border rounded"
              style={{
                borderColor: theme?.PRIMARY,
                color: theme?.PRIMARY,
                // backgroundColor: theme?.BACKGROUND,
                // backgroundColor: `${theme?.TEXT}22`
              }}
              placeholder="Type here..."
              value={prompt}
              onChange={(value: string): void => {
                setPrompt(value);
              }}
            />
          </div>
          <ul className="p-0">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                style={{ backgroundColor }}
                onClick={option.onClick}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
