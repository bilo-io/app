/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useContext, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import './App.scss';
// import { AppNavBar } from 'components/App/NavBar/AppNavBar';

// const AppTopBarContainer = React.lazy(() => import('./AppTopBarContainer'));
import { AppFeatureMenu, AppLoader, AppTopBarContainer } from 'components/App';
import AppMenu from 'components/App/AppMenu';

import { storageKey, toggleTheme, useAppTheme, useAppUser } from 'hooks';
import { AppContext } from 'data/context/app-context';
import routes from './pages/routes';
import { ToastProvider } from 'components/Core/Toast/ToastProvider';
import { ErrorBoundary } from 'components/Core/ErrorBoundary/ErrorBoundary';

import { detectEnv, isDev, isLocal, isStaging } from 'utils/environment';
import AppVersion from 'components/App/AppVersion';
import { useCustomEvent } from 'utils/events';
import { log } from 'utils/logger';

const AppNavBar = React.lazy(() => import('components/App/NavBar/AppNavBar'));

const env = detectEnv();
if (isLocal || isDev || isStaging) {
  log({
    DEBUG: env,
    api: env.serverUrl,
    app: window.origin,
    name: env.envName,
  });
} else {
  log({
    api: env.serverUrl,
    app: window.origin,
    name: env.envName,
  });
}

function App() {
  // #region HOOKS
  const { name: themeName } = useAppTheme();
  const appContext = useContext(AppContext);
  const { user } = useAppUser();
  // #endregion

  // #region STATE
  const [isAppMenuOpen, setAppMenuOpen] = useState<boolean>(false);
  const [isFeatureMenuOpen, setFeatureMenuOpen] = useState<boolean>(false);
  // #endregion

  useCustomEvent('ui.toggleAppMenu', () => {
    toggleAppMenu();
  });
  useCustomEvent('ui.showAppMenu', () => {
    setAppMenuOpen(true);
  });
  useCustomEvent('ui.hideAppMenu', () => {
    setAppMenuOpen(false);
  });
  // #region HELPERS
  const toggleAppMenu = () => {
    setAppMenuOpen(!isAppMenuOpen);
  };

  const toggleFeatureMenu = () => {
    setFeatureMenuOpen(!isFeatureMenuOpen);
  };

  const initialiseTheme = () => {
    const themeStorage = localStorage.getItem(storageKey);

    // NB: Fallback in case theme is not set
    if (!themeStorage) {
      const defaultTheme = 'dark';
      localStorage.setItem(storageKey, defaultTheme);
      window.location?.reload();
    }
  };

  //#endregion

  // #region LIFECYCLE
  useEffect(() => {
    initialiseTheme();
  }, []);
  // #endregion

  return (
    <div className={`App ${themeName} fixed w-full h-full flex flex-row`}>
      <AppContext.Provider value={appContext}>

        <AppVersion />

        <ToastProvider>
          <Suspense fallback={<AppLoader />}>
            <BrowserRouter>
              <ErrorBoundary>

                <AppTopBarContainer />

                <AppNavBar
                  isAdmin={user?.isAdmin}
                  onToggleMenu={() => toggleAppMenu()}
                  onToggleFeatureMenu={() => toggleFeatureMenu()}
                />

                <AppMenu
                  isOpen={isAppMenuOpen}
                  onToggle={toggleAppMenu}
                />

                <AppFeatureMenu
                  isOpen={isFeatureMenuOpen}
                  onClose={() => toggleFeatureMenu()}
                />

                <Routes>
                  {
                    [
                      ...routes
                    ].map((route: {
                      path: string,
                      element: React.ReactElement
                    }) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))
                  }
                </Routes>

              </ErrorBoundary>
            </BrowserRouter>
          </Suspense>

        </ToastProvider>

        {/* <AIAssistant /> */}

      </AppContext.Provider>
    </div >
  );
}

export default App;
