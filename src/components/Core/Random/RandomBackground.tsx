import { useAppTheme } from 'hooks';
import useRandomImage from 'hooks/use-random-image';
import React from 'react';

interface RandomBackgroundProps {
  images?: string[],
  className?: string,
  children: React.ReactNode,
  hasBlur?: boolean;
}

export const RandomBackground: React.FC<RandomBackgroundProps> = ({
  hasBlur,
  images,
  className,
  children,
}) => {
  const { theme } = useAppTheme();
  const imageUrl = useRandomImage(5000, images);

  return (
    <div className={`${className} transition-all duration-600 ease-in-out`} style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      {hasBlur ? (<div style={{
        backdropFilter: 'blur(3px)',
        backgroundColor: `${theme?.BACKGROUND}AA`,
        height: 'inherit',
        minHeight: '50%',
        position: 'relative',
        width: '100%',
      }}>
        {children}
      </div>) : children}
    </div>
  );
};

export default RandomBackground;