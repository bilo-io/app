import { IUser } from '@vision/core';
import { useAppTheme } from 'hooks';
import _ from 'lodash';
import React from 'react';

import { CompanyIcon } from '../Icon/CompanyIcon/CompanyIcon';
import Typography from '../Typography/Typography';


interface RoundAvatarProps {
  url: string;
  alt?: string;
  size?: number;
  initials?: string;
}

const RoundAvatar: React.FC<RoundAvatarProps> = ({ url, alt = 'Avatar', size = 50, initials = '' }) => {
  const { theme } = useAppTheme();

  const avatarStyle: React.CSSProperties = {
    borderRadius: '50%',
    height: size,
    objectFit: 'cover',
    width: size,
  };

  return !_.isEmpty(url) ? (<img src={url} alt={alt || url} style={avatarStyle} />) : (
    <div style={{ ...avatarStyle, backgroundColor: theme?.PRIMARY }} className="flex items-center justify-center">
      <Typography color={'#FFF'} size={'lg'}>
        {initials}
      </Typography>
    </div>
  );
};

interface UserAvatarProps {
  user: IUser,
  hideEmail?: boolean,
  hideName?: boolean,
  hideImage?: boolean,
  hideProvider?: boolean,
  size: number,
  isActive?: boolean,
  isEmailHighlight: boolean
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  user,
  hideEmail,
  hideName,
  hideImage,
  hideProvider,
  size,
  isActive,
  isEmailHighlight,
}) => {
  const { theme } = useAppTheme();

  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="w-full flex flex-row items-center">
        {!hideImage && <div className="rounded-full" style={{
          border: isActive ? `4px solid ${theme?.PRIMARY}` : `4px solid ${theme?.PRIMARY}66`
        }}>
          <RoundAvatar url={user?.image as string} size={size} />
        </div>
        }
        <div className={`${hideImage ? '' : 'ml-4'} flex flex-col justify-center`}>
          {!hideName && <Typography>{user?.name}</Typography>}
          {/* <br /> */}
          {!hideEmail && <Typography size="sm" color={isEmailHighlight ? theme?.PRIMARY : theme?.TEXT}>{user?.email}</Typography>}
        </div>
      </div>
      {!hideProvider && (
        <div>
          <CompanyIcon code={user?.authMethod} imgStyle={{ width: '1rem' }} />
        </div>
      )}
    </div>
  );
};

export default RoundAvatar;