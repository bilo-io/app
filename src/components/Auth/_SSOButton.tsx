import { useAppTheme } from 'hooks';
import React, { MouseEventHandler } from 'react';

interface SSOButtonProps {
    isDisabled?: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
    image: any,
}

export const SSOButton: React.FC<SSOButtonProps> = ({
  isDisabled,
  onClick,
  image,
}) => {
  const { theme } = useAppTheme();

  return (
    <button
      onClick={!isDisabled ? onClick : () => { }}
      disabled={isDisabled}
      className={`bg-transparent w-12 h-12 p-2.5 mx-2 rounded-full text-center ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} h-12 flex flex-row items-center ${isDisabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
      style={{
        border: `1px solid ${theme?.TEXT}66`,
      }}
    >
      <img src={image} className="w-7 h-7" alt="apple-logo" />
    </button>
  );
};

export default SSOButton;