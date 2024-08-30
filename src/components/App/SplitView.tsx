import React, { useEffect, useState } from 'react';
import { SplitLayout, } from 'components/Core';
import { ErrorBoundary } from 'components/Core/ErrorBoundary/ErrorBoundary';
import {
  SwipeDirection,
  SwipePosition,
  useAppTheme,
  useSwipeV3,
  useTranslations
} from 'hooks';
import useDevice, { isMobile } from 'hooks/use-device';
import { SliceType } from 'models/store';
import FontAwesome from 'react-fontawesome';
import SplitPane from 'react-split-pane';
import { dispatchCustomEvent, useCustomEvent } from 'utils/events';

import SideMenu from './SideMenu';
import { log } from 'utils/logger';

interface SplitViewProps {
  slice: SliceType,
  exploreView: React.ReactElement,
  contentView: React.ReactElement,
  controlView: React.ReactElement,
  emptyView: React.ReactElement,
  isShowingControls: boolean;
  isShowingItem?: boolean;
  hasNoPadding?: boolean,
  hasLeftMenu?: boolean,
  hasRightMenu?: boolean,
}

export const SplitView: React.FC<SplitViewProps> = ({
  slice,
  exploreView,
  contentView,
  controlView,
  emptyView,
  isShowingControls,
  isShowingItem,
  hasNoPadding,
  hasLeftMenu = true,
  hasRightMenu = true,
}) => {
  // #region HOOKS
  const device = useDevice();
  const { theme, name: themeName } = useAppTheme();
  const { t } = useTranslations();
  const isDeviceMobile: boolean = isMobile();

  // const project = useProject();

  useCustomEvent('ui.openLeftSideMenu', () => {
    setIsExploreMenuOpen(true);
  });
  useCustomEvent('ui.closeLeftSideMenu', () => {
    setIsExploreMenuOpen(false);
  });
  useCustomEvent('ui.openRightSideMenu', () => {
    setIsControlMenuOpen(true);
  });
  useCustomEvent('ui.closeRightSideMenu', () => {
    setIsControlMenuOpen(false);
  });
  // #endregion

  // #region STATE
  const [isExploreMenuOpen, setIsExploreMenuOpen] = useState<boolean>(false);
  const [isControlMenuOpen, setIsControlMenuOpen] = useState<boolean>(false);
  // #endregion

  // #region SWIPE
  const onSwipe = (direction: SwipeDirection, position: SwipePosition): void => {

    log({ direction, position });

    if (isDeviceMobile) {
      if (direction === 'left') {
        if (position === 'edgeToEdge') {
          dispatchCustomEvent('ui.hideAppMenu');
        } else if (position === 'centerToEdge' || position === 'edgeToCenter') {
          dispatchCustomEvent('ui.hideAppMenu'); // always hide the menu
          if (!isExploreMenuOpen && !isControlMenuOpen && hasRightMenu) {
            dispatchCustomEvent('ui.openRightSideMenu');
          } else if (isExploreMenuOpen && hasLeftMenu) {
            dispatchCustomEvent('ui.closeLeftSideMenu');
          }
        }
      }

      if (direction === 'right') {
        if (position === 'edgeToEdge') {
          if (!isExploreMenuOpen && !isControlMenuOpen) {
            // dispatchCustomEvent('ui.showAppMenu');
          }
        } else if (position === 'centerToEdge' || position === 'edgeToCenter') {
          if (!isExploreMenuOpen && !isControlMenuOpen && hasLeftMenu) {
            dispatchCustomEvent('ui.openLeftSideMenu');
          } else if (isControlMenuOpen && hasRightMenu) {
            dispatchCustomEvent('ui.closeRightSideMenu');
          }
        }
      }
    }
  };

  useSwipeV3({ onSwipe });
  // #endregion

  // #region HANDLERS
  const handleToggleExploreMenu = () => setIsExploreMenuOpen((prev: boolean) => !prev);
  const handleToggleControlMenu = () => setIsControlMenuOpen((prev: boolean) => !prev);
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (
        args[0] &&
        typeof args[0] === 'string' &&
        (args[0].includes('ResizeObserver loop completed with undelivered notifications') ||
          args[0].includes('Store does not have a valid reducer.'))
      ) {
        return;
      }
      originalError.call(console, ...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);
  // #endregion


  return (
    <ErrorBoundary>
      {(
        device !== 'mobile' ? <>
          <SplitLayout hasNoPadding={hasNoPadding}>
            <div className="border-r border-layout-border" style={{
              height: hasNoPadding ? 'calc(100% - 0rem)' : 'calc(100% - 3rem)',
              paddingTop: hasNoPadding || isMobile() ? 0 : '0',
              // backgroundColor: theme?.APP_BACKGROUND,
              // color: theme?.TEXT,
            }}>
              {exploreView}
            </div>
            {isShowingControls
              ? (
              // @ts-ignore
                <SplitPane
                  split="vertical"
                  allowResize
                  defaultSize={`${parseInt(localStorage.getItem('splitPosControls') as string, 10)}px`}
                  size={`${parseInt(localStorage.getItem('splitPosControls') as string, 10) || 320}px`}
                  onChange={(size: number) => {
                    localStorage.setItem('splitPosControls', size?.toString());
                  }}
                  minSize={240}
                  // maxSize={2400}
                  className='w-full h-full'
                >
                  <div className="border-r border-layout-border h-full">
                    {isShowingItem ? contentView : emptyView}
                  </div>
                  {isShowingControls && !!controlView ? controlView : null}
                </SplitPane>
              ) : (
                <div className="border-r border-layout-border h-full">
                  {isShowingItem ? contentView : emptyView}
                </div>
              )
            }

          </SplitLayout >
        </> : (
          <div className={`w-full ${hasNoPadding ? '' : 'pt-10 mt-2'} pb-16 relative`}>
            {hasLeftMenu && (<div
              className={`fixed z-10 left-2 ${hasNoPadding || isMobile() ? 'top-2' : 'top-2'} p-1 w-8 h-8 flex items-center justify-center rounded-full border`}
              style={{
                backgroundColor: theme?.BACKGROUND,
                zIndex: 45,
              }}
              onClick={handleToggleExploreMenu}>
              <FontAwesome name="search" />
            </div>)}
            {!hasLeftMenu ? null : (
              <SideMenu
              // @ts-ignore
                title={t.common.itemExplorer(t.features[slice])}
                onToggle={handleToggleExploreMenu}
                isOpen={isExploreMenuOpen}
                isDark={themeName === 'dark'}>
                {exploreView}
              </SideMenu>
            )}

            <div className="h-full overflow-hidden overflow-y-auto no-scrollbar pt-0 md:pt-0">
              {isShowingItem ? contentView : emptyView}
            </div>

            {hasRightMenu && (
              <div
                className={`fixed right-2 ${hasNoPadding || isMobile() ? 'top-2' : 'top-2'} p-1 w-8 h-8 flex items-center justify-center rounded-full border`}
                style={{
                  backgroundColor: theme?.BACKGROUND,
                  zIndex: 45,
                }}
                onClick={handleToggleControlMenu}>
                {/* <FontAwesome name="ellipsis-v" /> */}
                <FontAwesome name="cog" />
              </div>
            )}
            {!hasRightMenu ? null : (
              <SideMenu
              // @ts-ignore
                title={t.common.itemTools(t.features[slice])}
                onToggle={handleToggleControlMenu}
                isOpen={isControlMenuOpen}
                isDark={themeName === 'dark'}
                isRight
              >
                {controlView}
              </SideMenu>
            )}
          </div>
        )
      )}
    </ErrorBoundary>
  );
};