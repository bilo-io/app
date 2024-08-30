
import { IUser } from '@vision/core';
import logo from 'assets/logos/logo-apple.svg';
import React from 'react';
import { signingWithGoogle } from 'utils/firebase';


import SSOButton from './_SSOButton';
import { log } from 'utils/logger';

const SSOAppleButton: React.FC<{
  isDisabled?: boolean,
  onSuccess?: (user: IUser) => void
}> = ({
  isDisabled,
  onSuccess,
}) => {
  const handleSignIn = async (): Promise<void> => {
    try {
      const result: any = await signingWithGoogle();

      const {
        displayName,
        email,
        emailVerified,
        photoURL,
        token,
      } = result.user;

      onSuccess?.({
        authMethod: 'Apple',
        email,
        emailVerified,
        image: photoURL,
        name: displayName,
        token,
      });
    } catch (error) {
      log.error('Apple Sign-In Error:', error);
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

export default SSOAppleButton;