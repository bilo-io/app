
import { AuthMethod, IUser } from '@vision/core';
import logo from 'assets/logos/logo-google.svg';
import React from 'react';
import { signingWithGoogle } from 'utils/firebase';


import SSOButton from './_SSOButton';
import { log } from 'utils/logger';

const SSOGoogleButton: React.FC<{
  isDisabled?: boolean,
  onSuccess?: (user: IUser) => void,
}> = ({
  isDisabled,
  onSuccess,
}) => {
  const provider: AuthMethod = 'Google';

  const handleSignIn = async (): Promise<void> => {
    try {
      const result: any = await signingWithGoogle();

      const {
        displayName,
        email,
        emailVerified,
        photoURL,
        token,
      } = result.user || {};

      const user: IUser = {
        authMethod: provider,
        email,
        emailVerified,
        image: photoURL,
        name: displayName,
        token,
        // ssoProvider: 'GOOGLE',
      };

      onSuccess?.(user);
    } catch (error) {
      log.error('Google Sign-In Error:', error);
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

export default SSOGoogleButton;