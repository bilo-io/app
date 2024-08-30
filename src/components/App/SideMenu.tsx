import { useAppTheme } from 'hooks';
import React from 'react';
import './SideMenu.scss';
import FontAwesome from 'react-fontawesome';
import { Typography } from 'components/Core';

interface SideMenuProps {
  title: string,
  isRight?: boolean;
  isOpen: boolean;
  isDark: boolean;
  onToggle: Function;
  children?: React.ReactElement | React.ReactElement[] | null;
}

export const SideMenu: React.FC<SideMenuProps> = ({
  title,
  isRight,
  isOpen,
  isDark,
  onToggle,
  children,
}) => {
  const { theme, name: themeName } = useAppTheme();

  return (
    <div className={`side-menu no-scrollbar pt-2 ${isOpen ? '' : 'collapsed'
    } ${isDark ? 'dark' : 'light'
    } ${isRight ? 'right' : ''
    } ${themeName}`}
    style={{
      backgroundColor: theme?.BACKGROUND,
      color: theme?.TEXT,
    }}>
      <div
        onClick={() => onToggle?.()}
        className={`p-2 absolute z-10 ${isRight ? 'right-2' : 'left-2'} p-1 w-8 h-8 flex items-center justify-center rounded-full border`}
        style={{
          backgroundColor: theme?.BACKGROUND,
        }}>
        <FontAwesome name={isRight ? 'arrow-right' : 'arrow-left'} />
      </div>

      <div className="w-fit mx-auto py-1.5">
        <Typography size="lg">{title}</Typography>
      </div>

      <hr />

      <div className='pt-0'>
        {children}
      </div>
    </div>
  );
};

export default SideMenu;