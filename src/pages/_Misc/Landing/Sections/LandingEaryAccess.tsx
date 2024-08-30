import { Button, Input, Typography } from 'components/Core';
import RandomBackground from 'components/Core/Random/RandomBackground';
import Section from 'components/Domain/Landing/Section';
import { useAppTheme } from 'hooks';
import _ from 'lodash';
import React, { useState } from 'react';

export const LandingEarlyAccess: React.FC = () => {
  const { theme } = useAppTheme();
  // #endregion

  const [lead, setLead] = useState<{ firstName: string, surName: string, email: string }>({
    email: '',
    firstName: '',
    surName: ''
  });

  const handleSetLead = (key: string) => (value: string): void => {
    setLead((prev: any) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <RandomBackground hasBlur>
      <Section isCentered>
        <div className="min-h-80 flex flex-col items-center justify-center px-2 py-20">
          <Typography size="2xl" align='center'>
                      Request Early Access
          </Typography>

          <br />

          <Typography align='center'>
                      Vision is currently in a closed, pre-alpha testing phase.
            <br />
                      To get on the waiting list, please enter your email address below.
          </Typography>
        </div>
        <div className="card card-1 flex flex-col items-center justify-center mb-0 w-fit mx-auto rounded-lg"
          style={{
            backgroundColor: theme?.APP_BACKGROUND
          }}>
          <div className="flex flex-col items-center justify-center p-4">
            <Input
              value={lead.firstName}
              placeholder='* First name'
              className="min-w-64"
              onChange={handleSetLead('firstName')}
            />
            <Input
              value={lead.surName}
              placeholder='* Surname'
              className="min-w-64"
              onChange={handleSetLead('surName')}
            />
            <Input
              value={lead.email}
              placeholder='* john@doe.email'
              className="min-w-64"
              onChange={handleSetLead('email')}
            />
          </div>
          <Button
            style={{
              backgroundColor: theme?.PRIMARY,
            }}
            className="w-full rounded-t-none rounded-b-lg p-6"
            onClick={() => alert('The Vision Studio team has been notified')}
            isDisabled={
              _.isEmpty(lead.email) || _.isEmpty(lead.firstName) || _.isEmpty(lead.surName)
            }
          >
                      Get access
          </Button>
        </div>
        <div className="h-28" />
      </Section>
    </RandomBackground>
  );
};

export default LandingEarlyAccess;