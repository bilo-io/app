import { IUser, SubscriptionPeriod, SubscriptionType, toSentenceCase } from '@vision/core';
import { Button, Typography, UserAvatar } from 'components/Core';
import { useAppTheme, useTranslations } from 'hooks';
import React from 'react';
import { subscriptionOptions } from 'utils/subscriptions';

interface AuthSignUpConfirmProps {
  value: {
    user: IUser,
    subscription: SubscriptionType | null,
    period: SubscriptionPeriod | null
  },
  onBack: () => void,
  onSubmit: () => void
}

export const AuthSignUpConfirm: React.FC<AuthSignUpConfirmProps> = ({
  value,
  onSubmit,
  onBack,

}) => {
  const { theme } = useAppTheme();
  const { tCore } = useTranslations();
  const subscription = subscriptionOptions?.find((s: { value: string; label: string; color: string; }) => s.value === value.subscription);

  return (
    <div className="w-full flex flex-col items-center justify-center my-4">
      <Typography size="lg">
        {tCore.confirm}
      </Typography>
      <br />
      <div className="w-full px-12 flex flex-row justify-between">
        <UserAvatar
          user={value.user as IUser}
          size={42}
          isEmailHighlight
        />
        <div className="my-8 border-2 p-1 px-2 rounded-full" style={{
          borderColor: subscription?.color,
          color: subscription?.color
        }}>
          <div>
            {toSentenceCase(value.subscription as string)}
            {/* {value.period && `(${toSentenceCase(value.period as string)})`} */}
          </div>
        </div>
      </div>

      <div className="w-full px-12 justify-center flex flex-row">
        <Button onClick={() => onBack?.()}
          className="mr-2 w-full text-center items-center justify-center"
          style={{
            backgroundColor: 'transparent',
            border: `1px solid ${theme?.PRIMARY}`,
            color: theme?.PRIMARY
          }}>
            Back
        </Button>
        <Button
          className="mr-2 w-full text-center items-center justify-center"
          onClick={onSubmit}
        >
          {tCore.confirm}
        </Button>

      </div>
    </div>
  );
};

export default AuthSignUpConfirm;