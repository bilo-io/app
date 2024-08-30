import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToTop } from 'utils/window';
import pkgVersion from 'version.json';

import 'styles/components/AppMenu.scss';
import AppGradientIcon from './AppGradientIcon';
import { AppIcon } from './AppIcon';
import { AppLogo } from './AppLogo';

import { SwipeDirection, SwipePosition, useAppFeatures, useAppTheme, useHover, useProjectFeatures, useSwipeV3, useTranslations } from 'hooks';
import { IFeature, IFeatureStatus, IUser, numberWithCommas } from '@vision/core';
import { Accordion, Button, Icon, IconName, LanguagePicker, Typography, UserAvatar } from 'components/Core';
import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';
import ThemePicker from 'components/Core/ThemeButton/ThemePicker';
import { SliceType } from 'models/store';
import { useNavigateToFeature } from 'hooks/use-navigate-to-feature';
import useAuth from 'hooks/use-auth';
import { isMobile } from 'hooks/use-device';
import { dispatchCustomEvent } from 'utils/events';

interface IAppMenuItem {
  name?: string;
  key?: string,
  onClick?: () => void;
  isDivider?: boolean;
  status?: IFeatureStatus
}

interface AppMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}
export const AppMenu: React.FC<AppMenuProps> = ({
  isOpen,
  onToggle,
}) => {
  const dividerKey = '---divider---';
  // #region HOOKS
  const { handleSignOut, user } = useAuth();
  const { navToFeature } = useNavigateToFeature();
  const { theme, name: themeName } = useAppTheme();
  const { t } = useTranslations();
  const navigate = useNavigate();
  const location = useLocation();

  const appFeatures = useAppFeatures();
  const projectFeatures = useProjectFeatures();
  const apiWorkspaces = useApiWorkspaces();

  const creditValue = apiWorkspaces?.item?.data?.subscription?.credits as number;
  // #endregion

  // #region SWIPING
  const isDeviceMobile: boolean = isMobile();

  const onSwipe = (direction: SwipeDirection, position: SwipePosition): void => {

    if (isDeviceMobile) {
      if (direction === 'left' && position === 'edgeToEdge') {
        if (isDeviceMobile && isOpen) {
          dispatchCustomEvent('ui.hideAppMenu');
        }
      }
    }

    //   if (direction === 'right' && position === 'edgeToEdge') {
    //     if (isDeviceMobile && !isOpen) {
    //       dispatchCustomEvent('ui.showAppMenu');
    //     }
    //   }
    // }
  };

  useSwipeV3({ onSwipe });
  // useSwipe(handleSwipeLeft, handleSwipeRight); // Use the custom hook
  // #endregion

  // #region STATE
  const privateRoutePatterns = [
    `${window.location.origin}/v1/`,
    `${window.location.origin}/v2/`,
  ];
  const [isWebApp, setIsWebApp] = useState<boolean>(
    location.pathname.includes(privateRoutePatterns[0])
    ||
    location.pathname.includes(privateRoutePatterns[1])
  );
  // #endregion

  // #region HELPERS
  const getFeatures = (): IFeature[] => {
    const appFeaturesWithoutAI = appFeatures.filter((f: IFeature) => f.key !== 'ai');
    const dividedFeatures: (IFeature & any)[] = [
      ...appFeaturesWithoutAI.filter((f: IFeature) => f.key !== 'ai')
        .slice(0, appFeaturesWithoutAI?.length / 2),
      {
        isActive: true,
        key: '---divider---',
        message: '',
        statusBadge: 'ready',
        updatedAt: '',
      },
      appFeatures?.find((f: IFeature) => f.key === 'ai'),
      {
        isActive: true,
        key: '---divider---',
        message: '',
        status: 'ready',
        updatedAt: '',
      },
      ...appFeaturesWithoutAI.slice(appFeaturesWithoutAI?.length / 2)
    ];

    const features: IFeature[] = dividedFeatures?.filter?.((item: IFeature) => (
      projectFeatures?.includes(item?.key) || item?.key === 'ai' || item?.key === dividerKey
    ));

    return features;
  };

  const goTo = (path?: string, slice?: SliceType, version?: '1' | '2'): void => {
    scrollToTop();

    if (path) {
      navigate(path);
    } else {
      navToFeature(slice, version);
    }

    onToggle();
    navigator?.vibrate?.(200);
  };

  const webAppLinks: IAppMenuItem[] = [
    {
      isDivider: true,
    },
    // {
    //   key: 'dashboard',
    //   name: `${t.features.dashboard} (v1)`,
    //   onClick: () => goTo('', 'dashboard' as SliceType, '1'),
    //   status: appFeatures?.find((f: IFeature) => f.key === 'workspaces')?.status,
    // },
    {
      key: 'dashboard',
      name: `${t.features.dashboard}`,
      onClick: () => goTo('/v2/dashboard'),
      status: appFeatures?.find((f: IFeature) => f.key === 'workspaces')?.status,
    },
    {
      isDivider: true,
    },
    ...(
      getFeatures()
        ?.slice(0) || [])
      .map((feat: IFeature) => feat?.key === dividerKey ? (
        {
          isDivider: true,
        }
      ):(
        {
          key: feat?.key,
          // @ts-ignore
          name: t.features[feat?.key] || feat?.key,
          onClick: () => goTo('', feat?.key as SliceType, '1'),
          status: feat?.status as IFeatureStatus,
        }
      ))
  ];

  const webSiteLinks: IAppMenuItem[] = [
    {
      // @ts-ignore
      key: 'home',
      name: t.features['home'],
      onClick: () => goTo('/'),
    },
    { isDivider: true },
    {
      key: 'features',
      name: t.common.features,
      onClick: () => goTo('/features'),
    },
    { isDivider: true },
    {
      key: 'docs',
      name: t.common.docs,
      onClick: () => goTo('/docs'),
    },
    {
      key: 'download',
      name: t.common.download,
      onClick: () => goTo('/download'),
    },
    {
      key: 'pricing',
      name: t.common.pricing,
      onClick: () => goTo('/pricing'),
    }
  ];
  // #endregion

  const handleShowUI = useCallback(() => {
    const pathNameMatcher = `${window.location.origin}${location.pathname?.split('/').slice(0, 3).join('/')}`;
    const isApp =
      pathNameMatcher.includes(privateRoutePatterns[0])
    ||
      pathNameMatcher.includes(privateRoutePatterns[1])
      ;

    setIsWebApp(isApp);
  }, [location.pathname, privateRoutePatterns]);

  useEffect(() => {
    handleShowUI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={`app-menu ${isOpen ? '' : 'collapsed'} ${themeName}  no-scrollbar`}>

      <div className="top">
        <div className="w-full flex flex-col items-center justify-start mx-0 mt-2">
          <div className="w-fit mb-4">
            <AppGradientIcon size={20} />
          </div>
          {/* <div className="w-4" /> */}
          <div>
            <AppLogo size={28} />
          </div>

          <div className="mt-0 flex flex-row items-center justify-center">
            <AppIcon color={theme?.TEXT} size={18} />
            <Typography size="md" className='pt-1'>{pkgVersion.version}</Typography>
          </div>
        </div>
        <div className={`${isOpen ? 'fixed' : ''} top-1.5 left-0.5 md:left-1.5 p-4 cursor-pointer`}
          onClick={(): void => {
            onToggle();
          }}>
          <Icon name="close" color={theme?.TEXT} />
        </div>
        <div />
      </div>

      <div className="w-full flex flex-row items-center justify-center mx-0 mt-8">
        {
          user?.email ? (
            <div className="mt-12 flex flex-col items-center justify-center">
              <div className='mr-0'>
                <Icon
                  color={theme?.PRIMARY}
                  name="credit"
                  size={28}
                />
              </div>
              <Typography size="xl" color={theme?.PRIMARY} weight='800' className="">
                {numberWithCommas(Math.abs(creditValue as number) || 0)}
              </Typography>
            </div>
          ): (
            <Button
              variant='primary'
              onClick={() => {
                onToggle?.();
                navigate('/auth/login');
              }}
              className="mt-12"
            >
              {t.auth.logIn}
            </Button>
          )
        }
      </div>

      <div className="content pb-8">
        <Accordion
          hasPadding
          title={
            <div className="py-2 pl-4">
              <Typography size="lg" color={isWebApp ? theme?.PRIMARY : theme?.TEXT}>
                {t.common.webApp}
              </Typography>
            </div>
          }
          isOpenDefault={isWebApp}>

          <div className="w-full mt-4" />

          {webAppLinks.map((item: IAppMenuItem, i: number) => (
            <AppMenuItem
              key={`nav-app-${i}`}
              item={item}
            />
          ))}

          <div className="w-full mt-4" />

        </Accordion>

        <hr className="w-full" />

        <Accordion
          hasPadding
          title={
            <div className="py-2 pl-6">
              <Typography className="py-4" size="lg" color={!isWebApp ? theme?.PRIMARY : theme?.TEXT}>
                {t.common.webSite}
              </Typography>
            </div>
          }
          isOpenDefault={!isWebApp}>

          <div className="w-full mt-4" />

          {webSiteLinks.map((item: IAppMenuItem, i: number) => <AppMenuItem key={`nav-site-${i}`} item={item} />)}
        </Accordion>

        <div className="mt-12 flex flex-col items-center">
          <LanguagePicker id={'app-menu'}
            isCustom
            showLabel={false}
            showLabelDropdown
            size={42}
          />
          <ThemePicker size={42} />
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          {user?.email ? (
            <div className="flex flex-col items-center my-4">
              <hr className="border-layout-border w-full absolute -mt-2" />
              <div className="mt-4">
                <UserAvatar
                  user={user as IUser} size={42}
                  isEmailHighlight
                  // hideProvider
                />
              </div>
              <hr className="border-layout-border w-full absolute top-12 mt-12" />
              <Button
                isOutline
                variant='primary'
                className='mt-8 mb-20'
                onClick={() => {
                  handleSignOut();
                  onToggle();
                }}
              >
                {t.auth.signOut}
              </Button>
            </div>
          ) : (
            <Button
              variant='primary'
              onClick={() => {
                onToggle?.();
                navigate('/auth/login');
              }}
              className="my-3"
            >
              {t.auth.logIn}
            </Button>
          )}
        </div>
      </div>


    </div>
  );
};

export default AppMenu;


interface AppMenuItemProps {
  item: IAppMenuItem,
}
export const AppMenuItem: React.FC<AppMenuItemProps> = ({
  item,
}) => {
  const { isHovered, onHoverStart, onHoverEnd } = useHover();
  const { theme } = useAppTheme();
  const location = useLocation();
  const isActive = location?.pathname?.includes(item.key as string);

  const dividerStyle = {
    borderTop: '1px solid #88888888',
    height: '1px',
    margin: 'auto',
    marginBottom: '1rem',
    marginTop: '1rem',
    width: '16rem',
  };

  return item?.isDivider
    ? <div className='divider horizontal' style={dividerStyle} />
    : <div className='link' onClick={(): void => { item?.onClick?.(); }}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={{
        backgroundColor: isHovered ? `${theme?.PRIMARY}33` : '',
      }}
    >
      <div className="flex flex-row items-center justify-center "
      >
        <div
          className="flex flex-row items-center justify-start w-40 ml-12 md:w-40"
        >
          <Icon size={24} color={isHovered || isActive ? theme?.PRIMARY : theme?.TEXT} name={item.key?.toLowerCase() as IconName} />
          {/* @ts-ignore */}
          {/* {(item?.status || item?.statusBadge || true) && (
            <div className={`absolute ${true ? 'right-2' : '-right-3'} top-2 w-2 h-2 rounded-lg`} style={{
              // @ts-ignore
              backgroundColor: getColorForStatus(item?.status || item?.statusBadge || 'ready' as IFeatureStatus, theme)
            }}
            />
          )} */}
          <Typography color={isHovered || isActive ? theme?.PRIMARY : theme?.TEXT} className="ml-4">{item?.name}</Typography>
        </div>
      </div>
    </div>;
};