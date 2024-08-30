import { IUser } from '@vision/core';
import SSOAppleButton from 'components/Auth/SSOAppleButton';
import SSOFacebookButton from 'components/Auth/SSOFacebookButton';
import SSOGithubButton from 'components/Auth/SSOGithubButton';
import SSOGoogleButton from 'components/Auth/SSOGoogleButton';
import { Button, UserAvatar } from 'components/Core';
import Checkbox from 'components/Core/Checkbox/Checkbox';
import { useAppTheme, useTranslations } from 'hooks';
import React, { useState } from 'react';

interface AuthSignUpUserProps {
  data: IUser | null,
  isLoading?: boolean,
  onChange: (value: IUser | null) => void,
  onSubmit: () => void,
  onAuthSuccess: (user: IUser | null) => void
}

export const AuthSignUpUser: React.FC<AuthSignUpUserProps> = ({
  data: user,
  isLoading,
  onChange,
  onSubmit,
  onAuthSuccess,
}) => {
  const { theme } = useAppTheme();

  // #region TRANSLATIONS
  const { tAuth, tCore } = useTranslations();
  // #endregion

  // #region STATE
  const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-full items-center justify-center my-4">
      {isLoading ? null : (
        <>
          <div className="-mt-4">
            <Checkbox
              checked={isTermsAccepted}
              label={tAuth.acceptTerms}
              onChange={(checked) => setIsTermsAccepted(checked)}
            />
          </div>
          <hr className="mx-8 md:mx-12 my-4 lg:my-4 opacity-50" />
          {user ? (
            <div className="flex flex-col w-full px-12">
              <UserAvatar user={user as IUser}
                size={48}
                isEmailHighlight
              />
              <div className="mx-0 mb-4 lg:my-4 w-full opacity-50" />

              <div className="w-full justify-center flex flex-row">
                <Button onClick={() => onChange(null)}
                  className="mb-4 mr-2 w-full text-center items-center justify-center"
                  style={{
                    backgroundColor: 'transparent',
                    border: `1px solid ${theme?.PRIMARY}`,
                    color: theme?.PRIMARY
                  }}>
                  {tAuth.changeUser}
                </Button>
                <Button
                  className="mb-4 mr-2 w-full text-center items-center justify-center"
                  onClick={onSubmit}
                  isDisabled={!user}
                >
                  {tCore.next}
                </Button>
              </div>
            </div>) : (
            <div className="flex flex-row mt-1 -mb-1">
              <SSOGoogleButton
                isDisabled={!isTermsAccepted}
                onSuccess={onAuthSuccess}
              />
              <SSOGithubButton
                isDisabled={!isTermsAccepted}
                onSuccess={onAuthSuccess}
              />
              {/* <SSOButton onClick={() => alert('Email auth not built')}
                  image={'https://www.svgrepo.com/show/156399/mail-envelope.svg'}
                /> */}
              <SSOFacebookButton
                isDisabled={!isTermsAccepted}
                onSuccess={onAuthSuccess}
              />
              <SSOAppleButton
                isDisabled={!isTermsAccepted}
                onSuccess={onAuthSuccess}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AuthSignUpUser;