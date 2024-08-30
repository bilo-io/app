import { useTranslations } from 'hooks';
import React from 'react';
import FontAwesome from 'react-fontawesome';

interface CloseButtonProps {
    onClick?: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
}) => {
  const { t } = useTranslations();

  return (
    <div className="flex flex-row items-center cursor-pointer hover:text-primary" onClick={() => {
      onClick?.();
    }}>
      <div className="m-1 cursor-pointer hover:text-primary">
        <FontAwesome name="close" className="hover:text-primary" />
      </div>

      <div className="ml-2 hover:text-primary">{t.common.close}</div>
    </div>
  );
};

export default CloseButton;