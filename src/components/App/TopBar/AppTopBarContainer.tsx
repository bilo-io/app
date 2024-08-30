import { useAppTheme } from 'hooks';
import { isMobile } from 'hooks/use-device';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AppTopBar } from './AppTopBar';
import { whiteListedPaths } from '../NavBar/AppNavBar.utils';

export const AppTopBarContainer: React.FC = (): React.ReactElement | null => {
  const location = useLocation();
  const { theme, name: themeName } = useAppTheme();
  const [isPathIncluded, setIsPathIncluded] = useState<boolean>(false);

  const handleShowUI = useCallback(() => {
    const pathNameMatcher = location.pathname?.split('/').slice(0, 3).join('/');
    const isIncluded = [
      ...whiteListedPaths,
      '/v1/workspaces',
      '/v1/projects',
    ].includes(pathNameMatcher);

    setIsPathIncluded(isIncluded);
  }, [location.pathname]);

  useEffect(() => {
    handleShowUI();
  }, [handleShowUI, location]);

  return isMobile() ? (
    isPathIncluded ? (
      <div>
        <AppTopBar
          type="mobile"
          themeName={themeName}
          theme={theme}
        />
      </div>
    ) : null
  ) : null;
};

export default AppTopBarContainer;
