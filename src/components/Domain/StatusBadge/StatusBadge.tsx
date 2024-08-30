import { IFeatureStatus, toSentenceCase } from '@vision/core';
import { useAppTheme } from 'hooks';
import React from 'react';
import { getColorForStatus } from 'utils/colors';

interface StatusBadgeProps {
    status: IFeatureStatus
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status
}) => {
  const { theme } = useAppTheme();

  return (
    <div
      className='py-0.5 px-3 rounded-full w-fit flex flex-row items-center justify-center'
      style={{
        backgroundColor: `${getColorForStatus(status, theme)}99`,
        color: '#FFF'
      }}>
      <div className="w-2 h-2 rounded-full mr-2" style={{
        backgroundColor: getColorForStatus(status, theme),
        color: theme?.TEXT
      }} />
      {toSentenceCase(status)}
    </div>
  );
};

export default StatusBadge;