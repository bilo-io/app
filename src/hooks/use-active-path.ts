import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useActivePath = () => {
  const location = useLocation();

  // #region STATE
  const [activePath, setActivePath] = useState<string>('about');
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    const basePath = location.pathname.split('/')?.[1];
    setActivePath(basePath);
  }, [location]);
  //#endregion

  return activePath;
};