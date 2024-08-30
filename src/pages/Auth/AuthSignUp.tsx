import { ISubscription, IUser, IUserSubscription, SubscriptionPeriod, SubscriptionType } from '@vision/core';
import { AppGradientIcon } from 'components/App';
import { AppIcon } from 'components/App/AppIcon';
import { AppLogo } from 'components/App/AppLogo';
import SEO from 'components/App/SEO';
import {
  LanguagePicker,
  ProgressBar,
  Spinner,
  ThemePicker,
  Typography,
} from 'components/Core';
import RandomBackground from 'components/Core/Random/RandomBackground';
import SlidingSteps from 'components/Core/SlidingSteps/SlidingSteps';
import { useToast } from 'components/Core/Toast/ToastProvider';
import TypingAnimation from 'components/Core/TypingAnimation/TypingAnimation';
import { useAppLanguage, useAppTheme, useAppUser, useTranslations } from 'hooks';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';


import { useNavigate } from 'react-router-dom';

import { messages, welcomeMessages } from './Auth.utils';

import { useAppSubscriptions } from 'hooks/use-app-subscriptions';

import AuthSignUpConfirm from './SignUp/AuthSignUpConfirm';
import AuthSignUpSubscription from './SignUp/AuthSignUpSubscription';
import AuthSignUpUser from './SignUp/AuthSignUpUser';

import { useApiUsers } from 'features/user/useApiUsers';

export const AuthSignUp: React.FC = () => {
  const defaultSubscription: IUserSubscription = {
    credits: 0,
    endDate: null,
    lastTopUp: new Date().toISOString(),
    period: 'MONTHLY',
    startDate: new Date().toISOString(),
    type: 'FREE',
  };

  // #region HOOKS
  const { theme, name: themeName } = useAppTheme();
  const { user: appUser } = useAppUser();
  const navigate = useNavigate();
  const { language, setLanguage } = useAppLanguage();
  const subscriptions = useAppSubscriptions();
  const wizardSteps: string[] = ['user', 'subscription', 'confirm'];
  const { addToast } = useToast();
  const apiUsers = useApiUsers();
  const { setAppUser } = useAppUser();
  const { tAuth } = useTranslations();
  // #endregion

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(appUser);
  const [subscription, setSubscription] = useState<SubscriptionType | null>(null);
  const [period, setPeriod] = useState<SubscriptionPeriod | null>(null);
  const [activeStep, setActiveStep] = useState<'user' | 'subscription' | 'confirm'>('user');
  // const [values, setValues] = useState<FormUser>({
  //   user: user as IUser,
  //   subscription: {
  //     ...defaultSubscription,
  //     type: subscription as SubscriptionType,
  //     period: period as SubscriptionPeriod,
  //   },
  // })
  // #endregion


  // #region HANDLERS
  // const handleChange = (key: string) => (value: any) => {
  //   setValues((prev: FormUser) => ({
  //     ...prev,
  //     [key]: value
  //   }))
  // }
  const handleError = (error: any): void => {
    addToast({
      body: `Error:\n${JSON.stringify(error, null, 2)}`,
      type: 'error',
    });
  };
  const handleSuccess = (user: IUser | null): void => {
    setUser(user);
  };
  const handleSignup = (): void => {
    const now = new Date().toISOString();
    const userSubscription = subscriptions?.find((s: ISubscription) => s.id === subscription);
    setIsLoading(true);

    const data: IUser = {
      ...(user as IUser),
      dateCreated: now,
      dateUpdated: now,
      subscription: {
        ...(userSubscription || defaultSubscription),
        period: period?.toUpperCase() as SubscriptionPeriod,
        type: subscription?.toUpperCase() as SubscriptionType,
      },
    };

    apiUsers.create({
      customId: data?.email,
      data,
      onError: handleError,
      onSuccess: (res) => {
        setIsLoading(false);
        addToast({
          body: 'Created user',
          type: 'primary',
        });
        setAppUser(data);
        navigate('/v2/dashboard');
      },
    });
  };

  const handleProgress = (): number => {
    // subscription !== null ? 66 : user ? 33 : 0
    switch (activeStep) {
    case 'user':
      return user ? 33 : 0;
    case 'subscription':
      return !!subscription && !!period
        ? 66
        : subscription === 'FREE'
          ? 66
          : !!(subscription && !period) || !(subscription && !!period)
            ? 50
            : 33;
    case 'confirm':
      return 100;
    default:
      return 0;
    }
  };

  const handleSubmit = (): void => {
    // Step 1
    if (activeStep === 'user') {
      setActiveStep('subscription');
      // Step 2
    } else if (activeStep === 'subscription') {
      setActiveStep('confirm');
    } else if (activeStep === 'confirm') {
      // Confirm User
      handleSignup();
      setIsLoading(true);
    }
  };

  return (
    <div className={`page ${themeName} flex flex-row`}>
      <SEO
        data={{
          description: 'Login to vision studio',
          keywords: ['vision', 'ai', 'generate', 'games', 'design'],
          title: 'Vision | Authentication',
        }}
      />
      <RandomBackground className={`page ${themeName} hidden md:block w-0 md:w-3/5 lg:w-2/3`}>
        <div className="w-full h-full flex flex-col items-center justify-center" style={{
          backdropFilter: 'blur(5px)',
          backgroundColor: '#00000088',
        }}>
          <Typography
            size="2xl"
            weight="600"
            variant="dark">
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
            className="w-3/5" align="center">
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
              {tAuth.signUp}
            </Typography>

            <div className="px-10 mt-4 mb-2 w-full">
              <ProgressBar value={handleProgress()} />
            </div>
          </div>

          {isLoading ? (
            <div className="-my-8">
              <Spinner color={theme?.PRIMARY} />
            </div>
          ) : null}

          <hr className="mx-8 md:mx-12 mt-5 lg:mt-5 opacity-50 border-none" />

          <SlidingSteps
            activeStep={wizardSteps?.findIndex((step: string) => step === activeStep)}
            steps={[
              <AuthSignUpUser
                key={0}
                data={user}
                onChange={setUser}
                onSubmit={handleSubmit}
                onAuthSuccess={handleSuccess}
              />,
              <AuthSignUpSubscription
                key={1}
                data={{
                  period,
                  subscription
                }}
                // @ts-ignore
                onChange={(args: {
                  period: SubscriptionPeriod,
                  subscription: SubscriptionType
                }) => {
                  setPeriod(args?.period || period);
                  setSubscription(args?.subscription || subscription);
                }}
                onBack={() => setActiveStep('user')}
                onSubmit={handleSubmit}
                onAuthSuccess={handleSuccess}
              />,
              <AuthSignUpConfirm
                key={2}
                onBack={() => setActiveStep('subscription')}
                onSubmit={handleSubmit} value={{
                  period,
                  subscription,
                  user: user as IUser,
                }}
              />
            ]}
          />

          <hr className="mx-8 md:mx-12 mb-4 lg:my-4 opacity-50" />

          <div className="w-full flex items-center justify-center mb-12">
            <Typography className="mt-4">
              {tAuth.alreadyHaveAccount}
              <Typography className="ml-2 cursor-pointer" color={theme?.PRIMARY}
                onClick={() => navigate('/auth/login')}>
                {tAuth.logIn}
              </Typography>
            </Typography>
          </div>

          <div className="w-fit mx-auto text-center">
            <LanguagePicker
              isCustom
              language={language}
              showLabel={false}
              showLabelDropdown
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

export default AuthSignUp;