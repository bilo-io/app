/* eslint-disable no-debugger */
import { numberWithCommas, toSentenceCase } from '@vision/core';
import { AudioPlayer, Clock, Icon, IconName, Typography } from 'components/Core';
import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';
import { useAppBreadcrumbs, useAppUser, useTranslations } from 'hooks';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'store';
import { useAppSelector } from 'store/hooks';
import { ITheme } from 'styles/themes';

interface AppTopBarProps {
  type: 'desktop' | 'mobile',
  theme?: ITheme,
  themeName?: string
}

export const AppTopBar: React.FC<AppTopBarProps> = ({ theme, themeName, type })=> {
  // #region HOOKS
  const navigate = useNavigate();
  const { setBreadcrumb } = useAppBreadcrumbs();
  const apiWorkspaces = useApiWorkspaces();
  const { t } = useTranslations();
  const creditValue = apiWorkspaces?.item?.data?.subscription?.credits as number;
  // #endregion

  // #region STORE
  const { user } = useAppUser();
  const { data: project } = useAppSelector((state: RootState) => state?.projects?.item);
  const isAutoPlay = false;
  // #endregion

  // #region STATE
  const [, setScrollState] = useState<string>('above');
  // #endregion

  // #region FUNCTIONS
  const handleScroll = (): void => {
    if (window.scrollY > 50) {
      setScrollState('above');
    } else {
      setScrollState('below');
    }
  };
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // @ts-ignore
    window?.addEventListener?.('scroll', handleScroll);

    return () => {
      window?.removeEventListener?.('scroll', handleScroll);
    };
  }, []);
  //#endregion

  const docName = useAppSelector((state: RootState) => state.app.breadcrumbResource);
  const projectName = project?.name;
  const sliceName = window.location?.pathname.split('/')[2];

  return (
    <div className={`app-top-bar pr-0 md:pr-12 ${themeName} ${type}`}>
      <div className="flex flex-row justify-center md:justify-between items-center w-full">
        {sliceName ? (
          // MOBILE
          <div className='block md:hidden' style={{ lineHeight: '3rem' }}>
            <Typography align="center" size="lg" className='flex flex-row items-center'>
              <div className='mr-2'>
                <Icon
                  name={sliceName as IconName}
                  color={theme?.TEXT}
                  size={22}
                />
              </div>
              <Typography size="xl">
                {/* @ts-ignore */}
                {toSentenceCase(t.features[sliceName] || '')}
              </Typography>

            </Typography>
          </div>
        ) : null}
        <div className="flex flex-row overflow-hidden">
          {/* DESKTOP */}
          <div className={`hidden md:flex flex-row items-center justify-center ${user?.email ? 'ml-2' : 'ml-2'} mr-4 items-center align-center justify-center h-12`} style={{
            lineHeight: '3rem',
          }}>

            <div className="hidden md:block mr-4">
              <AudioPlayer
                data={project?.audio?.theme as string}
                autoPlay={isAutoPlay}
              />
            </div>
            <div className="hidden md:flex flex-row items-center">
              {user?.email && (
                <Typography
                  onClick={() => {
                    navigate(user?.isAdmin ? '/v1/admin' : '/v1/projects');
                    setBreadcrumb('');
                  }}
                  className='cursor-pointer hover:text-primary'
                >
                  {user?.isAdmin ?
                    t.common.admin
                    :
                    t.features.projects
                  }
                </Typography>
              )}
              <div>
                <FontAwesome name="chevron-right" className="mx-3 mt-4" style={{
                  color: theme?.TEXT,
                }}
                />
              </div>
              <Typography onClick={() => {
                navigate(user?.isAdmin ? '/v1/admin/dashboard' : '/v2/dashboard');
                setBreadcrumb('');
              }}
              className='cursor-pointer hover:text-primary whitespace-nowrap overflow-hidden'
              >
                {user?.isAdmin ? t.dashboard.title : projectName}
              </Typography>
              {sliceName && sliceName !== 'dashboard' && (
                <>
                  <div>
                    <FontAwesome
                      name="chevron-right"
                      className="mx-3 mt-4"
                      style={{
                        color: theme?.TEXT,
                      }}
                    />
                  </div>
                  <Typography
                    onClick={() => {
                      navigate(`/v1/${sliceName}`);
                      setBreadcrumb('');
                    }}
                    className='cursor-pointer hover:text-primary'>
                    {/* @ts-ignore */}
                    <Typography color={theme?.TEXT}>{(t.features?.[sliceName] || '')}</Typography>
                  </Typography>
                </>
              )}
              {sliceName && docName && (
                <>
                  <div>
                    <FontAwesome name="chevron-right" className="mx-3 mt-4" style={{
                      color: theme?.TEXT,
                    }} />
                  </div>
                  <Typography
                    onClick={() => {
                      window.location.reload();
                    }}
                    className='cursor-pointer hover:text-primary flex flex-row whitespace-nowrap overflow-hidden'
                  >
                    {docName}
                  </Typography>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          {!user?.email
            ? (
              <div
                className="mt-3 mr-4 cursor-pointer"
                onClick={() => navigate('/auth/login')}>
                <Typography className="mr-4">{t.auth.logIn}</Typography><FontAwesome name="user" />
              </div>
            ) : (
              <div
                className="hidden md:absolute right-0 top-2 md:flex flex-row cursor-pointer m-auto mr-4 overflow-hidden h-8 p-2 items-center"
                onClick={() => navigate('/v1/account')}
              >
                <div className="hidden md:block">
                  <Clock />
                </div>
                <div className="hidden md:flex flex-row items-center mx-2">
                  <Typography color={theme?.PRIMARY} weight='800' size="md" className="mr-2">
                    {numberWithCommas(creditValue || 0)}
                  </Typography>
                  <div className='-mr-4'>
                    <Icon name="credit" color={theme?.PRIMARY} size={28} />
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default AppTopBar;
