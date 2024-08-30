/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
import { Button, Typography } from 'components/Core';
import RandomBackground from 'components/Core/Random/RandomBackground';
import { useAppTheme, useHover, useTranslations } from 'hooks';
// import { SliceType } from 'models/store';
import React, { useEffect, useState } from 'react';

// import { useNavigate } from 'react-router-dom';
import { callApi } from 'utils/api';
import { compareSemver } from 'utils/semver';
import pkgVersion from 'version.json';

import AppGradientIcon from './AppGradientIcon';
import { AppIcon } from './AppIcon';
import { log } from 'utils/logger';

export const AppVersion: React.FC = () => {
  // #region HOOKS
  const { theme, name: themeName } = useAppTheme();
  const { t } = useTranslations();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();
  // #endregion

  // #region STATE
  const [loading, setLoading] = useState<boolean>(false);
  const [latestVersion, setLatestVersion] = useState<string>('0.1.20');
  const currentVersion = pkgVersion?.version as string;
  const isOutDated = compareSemver(latestVersion, currentVersion);
  // #endregion

  // #region HANDLERS
  const handleFetchVersion = (): void => {
    log('version.json: fetching...', new Date());
    callApi({
      method: 'GET',
      url: `${window.location.origin}/version.json`,
    }).then((response) => {
      // @ts-ignore
      const version = response?.response?.data?.version as string;
      log.success('version.json:', version);
      // @ts-ignore
      setLatestVersion(version);
    }).catch((error) => {
      log('ERROR fetching version.json', error);
    });
  };

  const handleUpdateApp = (): void => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, Math.random() * 5000);
  };
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    const fetchInterval = setInterval(() => {
      handleFetchVersion();
    }, 300_000);

    return () => {
      clearInterval(fetchInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // #endregion

  return isOutDated ? (
    <RandomBackground>
      <div className={`page ${themeName} no-scrollbar`} style={{ zIndex: 1000 }}>
        <div className="h-full page-content no-scrollbar  flex flex-col items-center justify-center">
          <div>
            <AppGradientIcon size={48} />
          </div>

          <div className="mt-4">
            <Typography size="2xl" color={theme?.PRIMARY}>
              {t.version?.header}
            </Typography>
          </div>

          <div className='flex flex-row items-center justify-center text-center mt-6 px-10'>
            <Typography align='center' className="mr-1" size="sm">
              {t?.version?.newVersion}
            </Typography>
            <div className="flex flex-row items-center justify-center">
              <AppIcon size={24} color={theme?.PRIMARY} />
              <Typography weight="600" size={'lg'} color={theme?.PRIMARY}>
                {latestVersion}
              </Typography>
            </div>
            <Typography align='center' className="ml-1" size="sm">
              {t?.version?.getVersion}
            </Typography>
          </div>

          <div className='flex flex-row items-center justify-center text-center mt-4 mb-8 px-10'>
            <div>
              <Typography align='center' color={theme.TEXT_LIGHT} size="sm">
                {t?.version?.currentVersion}
                <Typography align='center' className="ml-1" color={theme?.TEXT_LIGHT} weight="600">{currentVersion}</Typography>
              </Typography>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center">
            {loading ? (
              <svg className="pl" viewBox="0 0 128 128" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={theme.PRIMARY} />
                    <stop offset="50%" stopColor={theme.SECONDARY} />
                    <stop offset="100%" stopColor={theme.TERTIARY} />
                  </linearGradient>
                </defs>
                <circle className="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0,10%,10%,0.1)" strokeWidth="16" strokeLinecap="round" />
                <path className="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="44 1111" strokeDashoffset="10" />
              </svg>
            ) : (
              <div>
                <hr className="my-4 border-none w-full" />
                <Button
                  isOutline
                  onClick={handleUpdateApp}
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  size="lg"
                  style={{
                    backgroundColor: isHovered ? theme?.PRIMARY : 'transparent',
                    borderColor: theme?.PRIMARY,
                    color: isHovered ? theme?.TEXT : theme?.PRIMARY,
                    transition: 'all 1s ease-in-out',
                  }}>
                  <Typography className="" color={isHovered ? theme?.TEXT : theme?.PRIMARY}>
                    {t?.version?.updateNow}
                  </Typography>
                  {/* <Typography className="" color={isHovered ? theme?.TEXT : theme?.PRIMARY}>{'Update now'}</Typography> */}
                </Button>
                <hr className="my-4 border-none w-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    </RandomBackground>
  ) : null;
};

export default AppVersion;