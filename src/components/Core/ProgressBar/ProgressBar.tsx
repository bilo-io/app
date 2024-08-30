import { useAppTheme } from 'hooks';
import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  isAnimated?: boolean;
  interval?: number;
  color?: string;
  background?: string;
  height?: string;
  value?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  isAnimated = true,
  interval = 1000,
  color = '#0067FF',
  background = '#77777733',
  height = '0.25rem',
  value = 1,
}) => {
  const [progress, setProgress] = useState(0);
  const { theme } = useAppTheme();

  useEffect(() => {
    let progressInterval: any;// NodeJS.Timeout

    if (isAnimated) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const increment = value / (interval / 100);
          const newProgress = prevProgress + increment;

          if (newProgress >= value) {
            clearInterval(progressInterval);
            return value;
          }

          return newProgress;
        });
      }, interval / 100);
    }

    return () => {
      if (isAnimated) {
        clearInterval(progressInterval);
      }
    };
  }, [isAnimated, interval, value]);

  return (
    <div
      style={{
        backgroundColor: background,
        borderRadius: '10px',
        height: `${height}`,
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: color || theme?.PRIMARY,
          borderRadius: '10px',
          height: '100%',
          transition: isAnimated ? `${interval}ms width linear` : 'none',
          width: `${progress}%`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
