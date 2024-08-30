import React from 'react';
import { Button, Icon, IconName, Typography } from 'components/Core';
import RandomBackground from 'components/Core/Random/RandomBackground';
import { useAppFeatures, useAppTheme, useTranslations } from 'hooks';
// import { SliceType } from 'models/store';
import { useNavigate } from 'react-router-dom';

import AppGradientIcon from './AppGradientIcon';
import { StatusBadge } from 'components/Domain';
import { IFeature, IFeatureStatus } from '@vision/core';

interface AppFeatureMaintenanceProps {
    slice: string,
}

export const AppFeatureMaintenance: React.FC<AppFeatureMaintenanceProps> = ({
  slice,
}) => {
  const { theme, name: themeName } = useAppTheme();
  const { t } = useTranslations();
  const features = useAppFeatures();
  const navigate = useNavigate();

  return (
    <RandomBackground>
      <div className={`page ${themeName}`}>
        <div className="h-full page-content flex flex-col items-center justify-center">
          <div>
            <AppGradientIcon size={48} />
          </div>
          <div className="my-4 flex flex-row items-center justify-center">
            <Icon
              name={slice as IconName}
              color={theme?.PRIMARY}
              size={42}
            />
            <Typography
              align='center'
              className='ml-4 my-4'
              size="2xl"
              color={theme?.PRIMARY}
            >
              {/* @ts-ignore */}
              {t.features[slice]}
            </Typography>
          </div>

          <StatusBadge
            status={
              features
                ?.find((f: IFeature) => f.key === slice)
                ?.status as IFeatureStatus
            }
          />

          <div className="mt-4">
            <Typography size="xl" color={theme?.TEXT}>
                Coming soon...
            </Typography>
          </div>

          <div className='text-center my-8 px-10'>
            <Typography align='center'>
              {'We apologise for any inconvenience, and will do our best to support you.'}
            </Typography>
            <br />
            <br />
            <Typography align='center'>
              {'This feature is in heavy maintenance mode and will only be availbale once it is fully stable.'}
            </Typography>
            <br />
            <br />
            <Typography align='center'>
              {'In the mean time you can check out the feature details and documentation.'}
            </Typography>
          </div>
          <div className="flex flex-row">
            <Button
              isOutline
              onClick={() => navigate(`/docs/${slice}`)}
              size="lg"
              style={{
                borderColor: theme?.PRIMARY,
                color: theme?.PRIMARY,
              }}>
              {'Docs'}
            </Button>
            <Button
              //   isOutline
              size="lg"
              className="ml-4"
              onClick={() => navigate(`/features/${slice}`)}
              style={{
                backgroundColor: theme?.PRIMARY,
              }}>
              {'Feature'}
            </Button>
          </div>
        </div>

      </div>
    </RandomBackground>
  );
};

export default AppFeatureMaintenance;