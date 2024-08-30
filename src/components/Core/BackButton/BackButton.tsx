import React from 'react';
import FontAwesome from 'react-fontawesome';

interface BackButtonProps {
    onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
}) => (
  <div className="flex flex-row items-center cursor-pointer hover:text-primary" onClick={() => {
    onClick?.();
  }}>
    <div className="p-1 cursor-pointer">
      <FontAwesome name="chevron-left" className="hover:text-primary" />
    </div>
    <div className="ml-2">
      {/* <Typography>{activeDocument?.name}</Typography> */}
                Back
    </div>
  </div>
);

export default BackButton;