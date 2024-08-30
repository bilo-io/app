import { useEffect } from 'react';

export type ISettingsKey =
    'settings.ui.playMusicOnStartUp' |
    'settings.ui.showClock'

export const useAppSettings = (): {
    getSetting: (key: ISettingsKey)=> any | any[] | undefined,
    setSetting: (key: ISettingsKey, value: any) => void
} => {
  const setSetting = (key: ISettingsKey, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getSetting = (key: ISettingsKey): any | any[] | undefined => JSON.parse(localStorage?.getItem(key) as string);

  const initSettings = (): void => {
    const playMusicOnStartup = getSetting('settings.ui.playMusicOnStartUp') || false;
    const showClock = getSetting('settings.ui.showClock') || true;

    setSetting('settings.ui.playMusicOnStartUp', playMusicOnStartup);
    setSetting('settings.ui.showClock', showClock);
  };

  useEffect(() => {
    initSettings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getSetting,
    setSetting,
  };
};