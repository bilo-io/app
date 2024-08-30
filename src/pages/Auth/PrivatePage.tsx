import { IFeature } from '@vision/core';
import { AppLogo } from 'components/App/AppLogo';
import { Icon, Typography } from 'components/Core';
import useApiProjects from 'features/projects/useApiProjects';
import { useAppTheme, useAppUser } from 'hooks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { whitelistEmails } from 'utils/permissions';

//'https://cdn-icons-png.flaticon.com/512/12140/12140568.png'

const PrivatePage: React.FC<{
    children: React.ReactElement<any, any>,
    feature?: string
}> = ({ children, feature }) => {
  // #region HOOKS
  const { user } = useAppUser();
  const navigate = useNavigate();
  const projects = useApiProjects();
  const { theme } = useAppTheme();
  // #endregion

  // #region STORE
  const features = [] as IFeature[]; // useAppFeatures();
  const isFlagged = features?.some((f: IFeature) =>
    f.key === feature && !f.isActive
  );

  const featureFlag = features?.find((f: IFeature) => f.key === feature);
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // TODO: improve unauthorized check
    if (!user?.email) {
      navigate('/auth/login');
    } else if (!whitelistEmails.includes(user?.email)) {
      console.log({ email: user.email, whitelistEmails });
      navigate('/v1/waiting-list');
    }

    if (projects.item?.data?.id === null && user?.email) {
      navigate('/v1/projects');
    }
  }, [navigate, projects.item?.data?.id, user, user?.email]);
  // #endregion

  return isFlagged ? (
    // <RandomBackground className='w-full h-full' hasBlur>
    <div className="w-full h-full flex flex-col justify-center items-center">
      <AppLogo size={64} />
      <div className="card card-1 w-fit h-fit mt-12 p-8 flex flex-row rounded-lg"
        style={{
          backgroundColor: `${theme?.BACKGROUND}99`,
        }}>
        <div className="mr-4">
          {/* <img src={imgMaintenance} className="h-32" alt="maintenance" /> */}
        </div>

        <div>
          <Typography size="xl">Updating services</Typography>
          <br />
          <br />
          <div className="flex flex-row items-center">
            {/* @ts-ignore */}
            <Icon name={feature} color={theme?.PRIMARY} size={48} />
            <Typography color={theme?.PRIMARY} size="xl" className='ml-4'>
              {feature}
            </Typography>
          </div>
          {/* <hr /> */}
          <br />
          <Typography size="md">{featureFlag?.message}</Typography>
        </div>
      </div>
    </div>
    // </RandomBackground>
  ) : children;
};

export default PrivatePage;
