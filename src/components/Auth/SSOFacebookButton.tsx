import { IUser } from '@vision/core';
import logo from 'assets/logos/logo-facebook.svg';
import React from 'react';
import { signInWithFaceboook } from 'utils/firebase';


import SSOButton from './_SSOButton';
import { log } from 'utils/logger';

const SSOFacebookButton: React.FC<{
  isDisabled?: boolean,
  onSuccess?: (user: IUser) => void,
}> = ({
  isDisabled,
  onSuccess,
}) => {
  const handleSignIn = async (): Promise<void> => {
    try {
      const result: any = await signInWithFaceboook();

      const {
        displayName,
        email,
        emailVerified,
        photoURL,
        token,
      } = result?.user || {};

      const { error } = result;
      if (error) throw error;

      const user: IUser = {
        authMethod: 'Facebook',
        email,
        emailVerified,
        image: photoURL,
        name: displayName,
        token,
        // ssoProvider: 'FACEBOOK'
      };

      onSuccess?.(user);
    } catch (error) {
      log.error('Facebook Sign-In Error:', error);
    }
  };

  return (
    <SSOButton
      isDisabled={isDisabled}
      onClick={handleSignIn}
      image={logo}
    />
  );
};

export default SSOFacebookButton;