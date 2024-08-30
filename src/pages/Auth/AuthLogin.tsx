import { IUser } from '@vision/core';
import { AppGradientIcon } from 'components/App';
import { AppIcon } from 'components/App/AppIcon';
import { AppLogo } from 'components/App/AppLogo';
import SEO from 'components/App/SEO';
import SSOAppleButton from 'components/Auth/SSOAppleButton';
import SSOGoogleButton from 'components/Auth/SSOGoogleButton';
import { LanguagePicker, Spinner, ThemePicker, Typography } from 'components/Core';
import Checkbox from 'components/Core/Checkbox/Checkbox';
import { setUser } from 'features/app/appSlice';
import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { persistor } from 'store';
import { useAppDispatch } from 'store/hooks';

import SSOFacebookButton from 'components/Auth/SSOFacebookButton';
import SSOGithubButton from 'components/Auth/SSOGithubButton';
import TypingAnimation from 'components/Core/TypingAnimation/TypingAnimation';
import RandomBackground from 'components/Core/Random/RandomBackground';
import { ThemeName, storageKey, useAppLanguage, useAppTheme, useAppUser, useTranslations } from 'hooks';
import { logOut } from 'utils/firebase';
import { isAdminUser } from 'utils/users';

import { messages, welcomeMessages } from './Auth.utils';

import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';
import { useApiUsers } from 'features/user/useApiUsers';
import useAuth from 'hooks/use-auth';
import { log } from 'utils/logger';

export const AuthLogin: React.FC = () => {
  // #region HOOKS
  const { theme, name: themeName } = useAppTheme();
  const { user: appUser } = useAppUser();
  const navigate = useNavigate();
  const { language, setLanguage } = useAppLanguage();
  const dispatch = useAppDispatch();
  const { user } = useAppUser();
  const { handleSignOut } = useAuth();

  const apiUsers = useApiUsers();
  const apiWorkspaces = useApiWorkspaces();
  // #endregion

  // #region TRANSLATIONS
  // @ts-ignore
  const { tAuth } = useTranslations('auth');
  // #endregion

  // #region STATE
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // #endregion

  // #region FUNCTIONS
  const handleSuccess = (user: IUser): void => {
    const isAdmin: boolean = isAdminUser(user);

    dispatch(setUser({
      ...user,
      isAdmin
    }));
  };

  const handleNavigation = (): void => {
    if (appUser && appUser?.email) {
      const isAdmin: boolean = isAdminUser(user);
      const path = isAdmin ? '/v1/admin' : '/v2/dashboard';


      apiUsers?.read({
        projectId: ''
      });

      apiWorkspaces?.read({
        projectId: ''
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps

      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate(path);
      }, 2000);
    }
  };
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    if (user) {
      handleSignOut();
    }

    const themeStore = localStorage.getItem(storageKey) as ThemeName;
    log({ themeStore });
    localStorage.setItem(storageKey, themeStore || 'light');

    // apiUsers?.clearList?.();
    // apiWorkspaces?.clearList?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleNavigation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appUser, appUser?.email]);
  // #endregion

  return (
    <div className={`page ${themeName} flex flex-row`}>
      <SEO
        data={{
          description: 'Login to vision studio',
          keywords: ['vision', 'ai', 'generate', 'games', 'design'],
          title: 'Vision | Authentication'
        }}
      />
      <RandomBackground className={`page ${themeName} hidden md:block w-0 md:w-3/5 lg:w-2/3`}>
        <div className="w-full h-full flex flex-col items-center justify-center" style={{
          backdropFilter: 'blur(5px)',
          backgroundColor: `${theme?.BACKGROUND}66`
        }}>
          <Typography
            size="2xl"
            weight="600"
            variant="dark">
            {/* {viewMessages.welcomeHeading} */}
            <TypingAnimation texts={messages} delay={2000} hasCaret caretColor={theme?.PRIMARY} />
          </Typography>
          <br />
          <Link to="/">
            <AppIcon color={'#FFF'} size={128} />
          </Link>
          <br />
          <Typography
            size="lg"
            weight="400"
            variant="dark"
            className="w-fit mx-auto" align="center">
            {/* {viewMessages.welcomeSentence} */}
            {/* {welcome} */}
            <TypingAnimation texts={welcomeMessages} delay={3000} caretColor={theme?.PRIMARY} />
          </Typography>
        </div>
      </RandomBackground>


      <div className={`${themeName} w-full h-full md:w-1/2 lg:w-1/3 flex flex-col items-center justify-center overflow-y-auto py-8`}>
        <div className="w-full">
          <div className="items-center flex flex-col mg-4 lg:mt-8">
            <div className="mb-8 lg:mb-8 cursor-pointer flex flex-col items-center justify-center w-fit mx-auto"
              onClick={() => navigate('/')}>
              <div className="mb-4">
                <AppGradientIcon size={42} />
              </div>
              <div className="">
                <AppLogo size={36} />
              </div>
            </div>

            <Typography size="lg" align="center" className="opacity-100">
              {tAuth.logIn}
            </Typography>
          </div>

          <hr className="mx-8 md:mx-12 my-4 lg:my-4 opacity-50" />

          <div className="lg:mt-16 w-fit mx-auto pt-4 mb-12">
            {isLoading ? null : (
              <Checkbox
                checked={isTermsAccepted}
                label={tAuth.acceptTerms}
                onChange={(checked) => setIsTermsAccepted(checked)}
              />
            )}
          </div>

          <div className="w-full flex flex-row items-center justify-center mb-20 pb-4">
            {/* {isLoading ? <Loader type={LoaderType.SPINNER} /> : ( */}
            {isLoading ? (
              <div className="-my-8">
                <Spinner color={theme?.PRIMARY} />
              </div>
            ) : (
              <>
                <SSOGoogleButton
                  isDisabled={!isTermsAccepted}
                  onSuccess={handleSuccess}
                />
                <SSOGithubButton
                  isDisabled={!isTermsAccepted}
                  onSuccess={handleSuccess}
                />
                {/* <SSOButton onClick={() => alert('Email auth not built')}
                  image={'https://www.svgrepo.com/show/156399/mail-envelope.svg'}
                /> */}
                <SSOFacebookButton
                  isDisabled={!isTermsAccepted}
                  onSuccess={handleSuccess}
                />
                <SSOAppleButton
                  isDisabled={!isTermsAccepted}
                  onSuccess={handleSuccess}
                />
              </>
            )}
          </div>

          <hr className="mx-8 md:mx-12 my-4 lg:my-4 opacity-50" />

          <div className="w-full flex items-center justify-center mb-12">
            <Typography className="mt-4">
              {tAuth.dontHaveAccount}
              <Typography className="ml-2 cursor-pointer" color={theme?.PRIMARY}
                onClick={() => navigate('/auth/signup')}>
                {tAuth.signUp}
              </Typography>
            </Typography>
          </div>

          {/* <hr className="mx-8 md:mx-12 my-4 lg:my-12 opacity-50" /> */}

          <div className="w-fit mx-auto text-center">
            <LanguagePicker
              isCustom
              showLabel={false}
              showLabelDropdown
              language={language}
              onSelectLanguage={setLanguage}
              size={42}
            />
            <ThemePicker size={42} />
          </div>
        </div>
      </div>


    </div>
  );
};

export default AuthLogin;
