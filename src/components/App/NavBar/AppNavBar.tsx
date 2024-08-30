import {
  Icon,
  IconName,
  LanguagePicker,
  Typography
} from 'components/Core';
import RoundAvatar, { UserAvatar } from 'components/Core/Avatar/Avatar';

import ThemePicker from 'components/Core/ThemeButton/ThemePicker';
import { useAppBreadcrumbs, useAppFeatures, useAppLanguage, useAppTheme, useAppUser, useHover, useTranslations } from 'hooks';
import { isMobile } from 'hooks/use-device';
import { AppGradientIcon } from '../AppGradientIcon';

import { useNavigateToFeature } from 'hooks/use-navigate-to-feature';
import { useProjectFeatures } from 'hooks/use-project-features';
import { SliceType } from 'models/store';
import React, { useEffect, useMemo, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import { getColorForStatus } from 'utils/colors';

import { navbarItems, whiteListedPaths } from './AppNavBar.utils';
import { IAppNavBarItem } from './AppNavBar.utils';
import { AppLogo } from '../AppLogo';
import useApiProjects from 'features/projects/useApiProjects';
import { IFeature } from '@vision/core';
import { log } from 'utils/logger';

interface AppNavBarProps {
  isAdmin?: boolean,
  onToggleMenu: Function;
  onToggleFeatureMenu: Function;
}

export const AppNavBar: React.FC<AppNavBarProps> = ({
  isAdmin,
  onToggleMenu,
  onToggleFeatureMenu,
}) => {
  const dividerKey = '---divider---';

  // #region HOOKS
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useAppTheme();
  const { t } = useTranslations();
  const { language, setLanguage } = useAppLanguage();
  // @ts-ignore
  const defaultExpanded = JSON.parse(localStorage.getItem('navbarExpanded'));
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [isInitialised, setIsInitialised] = useState<boolean>(false);
  // #endregion

  const mergeAppFeaturesWithNavItems = useMemo(() => (): IAppNavBarItem[] => {
    const merged = navbarItems?.slice()?.map((navbarItem: IAppNavBarItem) => {
      const appFeature = appFeatures?.find((aF: IFeature) => aF.key === navbarItem.key);
      return {
        ...navbarItem,
        status: appFeature?.status,
      };
    });

    return merged;
  }, []);

  // #region STORE
  const { user } = useAppUser();
  const appFeatures = useAppFeatures();
  const projectFeatures = useProjectFeatures();
  const featureKeys = projectFeatures || [];
  const [navItems, setNavItems] = useState<IAppNavBarItem[]>(
    // @ts-ignore
    mergeAppFeaturesWithNavItems()
  );

  // #endregion

  const handleAddFeature = (): void => {
    onToggleFeatureMenu();
  };

  const handleToggleExpand = (): void => {
    setIsExpanded((prev: boolean) => {
      const newValue = !prev;
      localStorage.setItem('navbarExpanded', JSON.stringify(newValue));
      return newValue;
    });
  };

  const pathNameMatcher = location.pathname?.split('/').slice(0, 3).join('/');

  useEffect(() => {
    if (isAdmin) {
      setNavItems(mergeAppFeaturesWithNavItems());
    }
  }, []);

  useEffect(() => {
    setIsInitialised(true);
  }, []);

  if (!isInitialised) return null;

  const isPathIncluded = true;
  // const isPathIncluded = [
  //   ...whiteListedPaths,
  //   '/v2/dashboard',
  //   '/v1/projects',
  //   '/v1/workspaces',
  //   '/v1/multimedia'
  // ].includes(pathNameMatcher);

  return !isPathIncluded ? null : (
    <div className={`navbar-container ${isExpanded ? 'show-labels' : ''} bg-red transition-all duration-700!important ease-in-out`}
      style={{
        width: isExpanded && !isMobile() ? '16rem' : 'fit-content',
      }}>
      {/* Mobile */}
      <div className="w-full flex md:hidden flex-row items-center justify-between h-20 pb-12 pt-8 border-t border-layout-border absolute bottom-0 z-50 px-4" style={{
        backgroundColor: theme?.APP_BACKGROUND,
        boxShadow: '0px -6px 30px 2px #00000044',
        color: theme?.TEXT,
        marginBottom: '-2px',
      }}>

        {/* @ts-ignore */}
        <div
          onClick={(): void => onToggleMenu()}
          className="w-1/5 flex flex-col items-center justify-between"
        >
          <Icon name="menu" size={40} color={theme?.PRIMARY} />
        </div>

        <div
          onClick={(): void => navigate('/v2/dashboard')}
          className="w-1/5 flex flex-col items-center justify-end">
          <AppGradientIcon size={32} />
        </div>

        {/* @ts-ignore */}
        <div
          onClick={(): void => navigate('/v1/account')}
          className='w-1/5 flex flex-col items-center justify-end'
          style={{
          }}>
          <div className="rounded-full" style={{
            border: `3px solid ${pathNameMatcher.includes('/v1/account') ? theme?.PRIMARY : 'transparent'}`,
          }}>
            <RoundAvatar
              url={user?.image as string}
              size={32}
            />
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className={'w-full hidden md:flex flex-col justify-between h-full overflow-hidden overflow-y-auto border-r border-layout-border no-scrollbar'}
        style={{
          backgroundColor: theme?.BACKGROUND,
          color: theme?.TEXT,
        }}
      >
        <div className="w-full">
          <div className="flex flex-row cursor-pointer items-center align-center justify-start ml-2 h-12" style={{
            lineHeight: '3rem',
            marginBottom: 'calc(2rem + 9px)',
          }} onClick={(): void => onToggleMenu()}>
            {isExpanded
              ? (
                <>
                  <AppGradientIcon size={20} onClick={(): void => onToggleMenu()} />
                  <div className="w-4" />
                  {/* <AppLogo size={24} /> */}
                </>
              ) : (
                <AppGradientIcon size={20} onClick={(): void => onToggleMenu()} />
              )
            }
          </div>
          <div className={`show-labels flex flex-col ${isExpanded ? 'items-start' : 'items-center'}`}>
            {[
              ...navbarItems,
              // ...(featureKeys?.length > 0 ? [
              //   { isDivider: true }
              // ] : [])
            ]?.map((item: IAppNavBarItem, i: number) => (
              <AppNavBarItem
                isExpanded={isExpanded}
                key={`nav-item-${i}`}
                item={item}
                featureKeys={featureKeys}
                appFeatures={appFeatures}
              />
            ))}

            <div onClick={(): void => handleAddFeature()} className="cursor-pointer">

              <div className={`w-fit mx-auto mb-4 text-center relative ${isExpanded ? 'px-4 ml-1' : 'ml-3'}`}>
                <FontAwesome
                  name={'plus'}
                  style={{
                    color: theme?.TEXT,
                    fontSize: 16,
                  }}
                />
                <Typography className="ml-4" color={`${theme?.TEXT}`}>
                  {isExpanded ? t.common.features : ''}
                </Typography>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">

          <div onClick={handleToggleExpand} className="my-3 mx-auto w-fit cursor-pointer flex flex-row items-center justify-start">
            <FontAwesome
              className={isExpanded ? 'ml-4 mr-3' : 'mx-5'}
              name={
                isExpanded
                  ? 'chevron-left'
                  : 'chevron-right'
              }
              style={{
                color: theme?.TEXT,
              }}
            />
            <div className={`${isExpanded ? 'w-48' : 'w-0'}`}>
              <Typography className={isExpanded ? 'ml-4' : ''}>
                {/* @ts-ignore */}
                {isExpanded ? t.components.sidebarClose : ''}
              </Typography>
            </div>
          </div>

          <div key={'divider-bottom'} className="mb-4 w-full" style={{
            backgroundColor: 'transparent',
            borderBottom: '1px solid #88888888',
            borderTop: 'none',
            borderWidth: 1,
            height: 0,
          }} />

          <div className={`${isExpanded ? 'w-full flex flex-row items-center justify-start' : 'w-fit'}`}>
            <div className={`${isExpanded ? 'ml-3 mb-0' : 'ml-0 mr-auto'} flex flex-row items-center`}>
              <LanguagePicker
                isCustom
                language={language}
                onSelectLanguage={setLanguage}
                showLabel={isExpanded}
                showLabelDropdown={isExpanded}
              />
            </div>
          </div>

          <div className={`mb-4 ${isExpanded ? 'ml-4 w-full' : 'mx-auto w-fit'} flex flex-row items-center justify-start transition-all duration-100 ease-in-out`}>
            <div className={`${isExpanded ? 'ml-1' : 'ml-0.25'}`}>
              <ThemePicker isCustom isNavbar showLabelDescription={isExpanded} />
            </div>
          </div>

          <div
            onClick={(): void => navigate('/v1/account')}
            className='mb-4 -mt-1.5 pl-2.5 flex flex-row items-center justify-center w-full cursor-pointer'>
            <UserAvatar
              user={user}
              size={28}
              isEmailHighlight
              isActive={pathNameMatcher.includes('/v1/account')}
              hideEmail={!isExpanded}
              hideName
              hideProvider
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavBar;


interface AppNavBarItemProps {
  isExpanded?: boolean,
  item: IAppNavBarItem,
  featureKeys: string[],
  appFeatures: IFeature[]
}

const AppNavBarItem: React.FC<AppNavBarItemProps> = ({
  isExpanded,
  item,
  featureKeys,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { navToFeature } = useNavigateToFeature();
  const { theme } = useAppTheme();
  const { t } = useTranslations();
  const { isHovered, onHoverStart, onHoverEnd } = useHover();
  const { setBreadcrumb } = useAppBreadcrumbs();

  const isActive = location?.pathname?.includes(item.path as string);

  return item?.isDivider ? (
    <div
      className="my-2 w-full"
      style={{
        backgroundColor: 'transparent',
        borderBottom: '1px solid #88888888',
        borderTop: 'none',
        borderWidth: 1,
        height: 0,
      }}
    />
  ) : (
    <div
      key={item?.name}
      onClick={(): void => {
        setBreadcrumb('');
        if (item?.path?.includes('/v1') && !item?.path?.includes('v1/admin') && item?.key !== 'account') {
          // navToFeature(item?.key as SliceType, '1');
          navigate(item?.path as string);
        } else {
          navigate(item?.path as string);
        }
      }}
      className={`cursor-pointer w-full transition-all duration-700 ease-in-out ${isExpanded ? 'px-0' : 'px-4'}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={{
        backgroundColor: isHovered ? `${theme.PRIMARY}33` : 'transparent',
      }}
    >
      <div className={`mx-auto my-2 text-center relative flex flex-row items-center ${isExpanded ? 'px-4' : ''}`}>
        <Icon
          name={item?.icon as IconName}
          size={20}
          color={isHovered || isActive ? theme?.PRIMARY : `${theme?.TEXT}`}
        // imageClass='shadow-md shadow-blue-500 drop-shadow-md'
        />
        {/* {item?.status && (
            <div className={`absolute ${isExpanded ? 'right-2' : '-right-3'} top-2 w-2 h-2 rounded-lg`}
              style={{
                backgroundColor: getColorForStatus(item?.status, theme),
              }} />
          )} */}
        {
          (
            <Typography
              color={isHovered || isActive ? theme?.PRIMARY : theme?.TEXT}
              className={`${isExpanded ? 'ml-4' : ''}`}>
              {/* @ts-ignore */}
              {/* {isExpanded ? t.features[item.key] : item.name} */}
              {isExpanded ? item.name : ''}
            </Typography>
          )
        }
      </div>
    </div>
  );
};
