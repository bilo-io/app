import { Icon, IconName } from 'components/Core';
import { useAppTheme } from 'hooks';
import React from 'react';
import FontAwesome from 'react-fontawesome';

interface ControlsHeaderProps {
  icon: string | IconName,
  label: string | React.ReactElement,
  hasCustomIcon?: boolean,
  isActive?: boolean,
}

export const ControlsHeader: React.FC<ControlsHeaderProps> = ({
  icon,
  label,
  isActive,
  hasCustomIcon,
}) => {
  const { theme } = useAppTheme();
  return (
    <div className="flex flex-row items-center">
      {hasCustomIcon ? (
        <Icon
          name={icon as IconName}
          color={isActive ? theme?.PRIMARY : `${theme?.TEXT}99`}
        />
      ) : (
        <FontAwesome
          name={icon}
            className="text-md"
        />
      )}
      <div className="mx-2">{label}</div>
    </div>
  );
};

export default ControlsHeader;