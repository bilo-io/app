import { SubscriptionPeriod, SubscriptionType } from '@vision/core';
import { Button, ToggleList, Typography } from 'components/Core';
import { useAppTheme, useTranslations } from 'hooks';
import React from 'react';
import { subscriptionOptions } from 'utils/subscriptions';

interface AuthSignUpSubscriptionProps {
  value: {
    period: SubscriptionPeriod | null,
    subscription: SubscriptionType | null
  },
  onSubmit: () => void,
  onBack: () => void,
  onChange: (value: {
    subscription?: SubscriptionType | null,
    period?: SubscriptionPeriod | null
  }) => void
}

export const AuthSignUpSubscription: React.FC<AuthSignUpSubscriptionProps> = ({
  value,
  onChange,
  onSubmit,
  onBack,
}) => {
  const { theme } = useAppTheme();

  const { tCore } = useTranslations();

  return (
    <div className="flex flex-col my-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-row">
          <Typography size="lg" className="mr-4">
            Subscription
          </Typography>
          <ToggleList
            value={value?.period as string}
            orientation='horizontal'
            isDisabled={value?.subscription === 'FREE'}
            options={[
              { color: theme?.PRIMARY, label: tCore.monthly, value: 'MONTHLY' },
              { color: theme?.SUCCESS, label: `${tCore.yearly} (-10%)`, value: 'YEARLY' }
            ]}
            onChange={(value: any): void => {
              onChange({ period: value });
            }}
          />
        </div>
        <br />
        <br />
        <ToggleList
          isMulti={false}
          // isDisabled={!isUserIncluded(user)}
          value={value?.subscription as SubscriptionType}
          orientation='horizontal'
          options={subscriptionOptions}
          onChange={(value: any): void => {
            onChange({ subscription: value });
          }}
        />
      </div>

      <hr className="mx-0 my-4 lg:my-4 border-layout-border border-b w-full opacity-50" />

      <div className="w-full px-12 justify-center flex flex-row">
        <Button onClick={() => {
          onBack();
          onChange?.({
            period: null,
            subscription: null
          });
        }}
        className="mb-2 mr-2 w-full text-center items-center justify-center"
        style={{
          backgroundColor: 'transparent',
          border: `1px solid ${theme?.PRIMARY}`,
          color: theme?.PRIMARY
        }}>
          {tCore.back}
        </Button>
        <Button
          className="mb-4 mr-2 w-full text-center items-center justify-center"
          onClick={onSubmit}>
          {tCore.next}
        </Button>
      </div>
    </div>
  );
};

export default AuthSignUpSubscription;