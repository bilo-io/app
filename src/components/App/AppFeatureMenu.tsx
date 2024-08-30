import { IFeature } from '@vision/core';
import { Icon, IconName, Modal, Switch, Typography } from 'components/Core';
import { fetchAppFeaturesAction } from 'features/app/appSlice';
import { useAppTheme, useTranslations } from 'hooks';
import { useAppFeatures } from 'hooks/use-app-features';
import React, { useEffect } from 'react';
import FontAwesome from 'react-fontawesome';
import { useAppDispatch } from 'store/hooks';

interface AppFeatureMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AppFeatureMenu: React.FC<AppFeatureMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const { theme } = useAppTheme();
  const { t } = useTranslations();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchAppFeaturesAction({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  const features = useAppFeatures();

  return (
    <Modal isOpen={isOpen} onClose={():void => onClose?.()}>
      <div className="" style={{
        margin: 'auto',
        maxWidth: '100%',
        width: '60rem',
      }}>
        <div className="p-2 w-full bg-primary">
          <Typography size="xl">Project Features</Typography>
        </div>
        <div className="w-1/2">
          {features?.map((feature: IFeature) => (
            <div key={feature.key} className="flex flex-row items-center justify-between p-4 card cursor-pointer border-b border-layout-border">
              {/* @ts-ignore */}
              <div className="flex flex-row items-center">
                <Icon name={feature.key as IconName} color={theme?.PRIMARY} />
                {/* @ts-ignore */}
                <Typography className="ml-4">{t.features[feature.key]}</Typography>
              </div>
              <div className="flex flex-row items-center">
                <a className="cursor-pointer mr-4 mt-1 -mb-1"
                  href={`${window.location.origin}/v1/feature-docs/${feature.key}`}
                  target={'_blank'} rel="noreferrer"
                >
                  <FontAwesome name="external-link" className='focus:outline-none' style={{ color: `${theme?.PRIMARY}66` }} />
                </a>
                <Switch
                  label={''}
                  defaultValue={false}
                  onChange={(value: boolean):void => console.log(`switch ${feature.key}: ${value}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default AppFeatureMenu;