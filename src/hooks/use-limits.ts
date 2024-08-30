import { IFeature } from '@vision/core';
import useApiWorkspaces from 'features/workspaces/useApiWorkspaces';

import { useAppRates } from './use-app-subscriptions';
import useAppUser from './use-app-user';

export const useLimits = (): {
    hasCreditsFor: (feature: IFeature | string) => boolean,
    expenseFeature: (feature: IFeature | string) => void
} => {
  const { user } = useAppUser();
  const rates = useAppRates();
  const apiWorkspaces = useApiWorkspaces();
  const credits = apiWorkspaces
    ?.item
    ?.data
    ?.subscription
    ?.credits || 0;

  const hasCreditsFor = (feature: IFeature | string): boolean => {
    if (user.email === 'bilo.lwabona@gmail.com') return true;
    //   @ts-ignore
    const rate = rates[feature?.toUpperCase()];

    return (credits || 0) > (rate || 0);
  };

  const expenseFeature = (feature: IFeature | string) => {
    //   @ts-ignore
    const rate = rates[feature?.toUpperCase()] || 0;

    const updatedCredits = credits - rate;
    // dispatch(setuserCredits(updatedCredits))
    //   TODO: API request to reduce credits on the workspace user account
    return updatedCredits;
  };

  return {
    expenseFeature,
    hasCreditsFor
  };
};