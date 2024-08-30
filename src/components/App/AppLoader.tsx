import React from 'react';
import { Spinner } from 'components/Core';
import { useAppTheme } from 'hooks';

import AppGradientIcon from './AppGradientIcon';

export const AppLoader: React.FC = () => {
  const { theme } = useAppTheme();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <AppGradientIcon size={32} />
      <Spinner color={theme?.PRIMARY || '#0067FF'} />
    </div>
  );
};

export default AppLoader;