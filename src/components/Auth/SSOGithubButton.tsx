import React from 'react';
import { AuthMethod, IUser } from '@vision/core';
import logo from 'assets/logos/logo-github.svg';
import { signInWithGithub } from 'utils/firebase';


import SSOButton from './_SSOButton';
import { log } from 'utils/logger';

const SSOGithubButton: React.FC<{
  isDisabled?: boolean,
  onSuccess?: (user: IUser) => void,
}> = ({
  isDisabled,
  onSuccess,
}) => {
  const provider:AuthMethod = 'Github';

  const handleSignIn = async (): Promise<void> => {
    try {
      const result: any = await signInWithGithub();

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
      };

      onSuccess?.(user);
    } catch (error) {
      log.error('Github Sign-In Error:', error);
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

export default SSOGithubButton;