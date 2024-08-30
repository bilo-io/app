import { useAppTheme } from 'hooks';
import React, { MouseEventHandler } from 'react';

import { AppIcon } from './AppIcon';

interface AppGradientIconProps {
    loading ?: boolean,
    onClick?: MouseEventHandler<HTMLDivElement>,
    size: number,
    isRound ?: boolean
}

export const AppGradientIcon: React.FC<AppGradientIconProps> = ({
  loading, onClick, size, isRound,
}) => {
  const { theme } = useAppTheme();
  return (
    <div className={
      `cursor-pointer p-2 ${loading ? 'mb-7' : ''}`
    }
    onClick={(e) => onClick?.(e)}
    style={{
      background: `linear-gradient(180deg, ${theme?.PRIMARY} 30%, ${theme?.SECONDARY} 80%)`,
      borderRadius: isRound ? '100%' : `${size / 3}px`,
    }}

    >
      <AppIcon size={size || 60} color={'#FFF'} />
    </div>
  );
};


export default AppGradientIcon;