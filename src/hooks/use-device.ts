import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

const useDevice = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return deviceType;
};

const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;

  if (width < 720) {
    return 'mobile';
  } else if (width < 1024) {
    return 'tablet';
  } else {
    return 'desktop';
  }
};

export const isMobile = () => getDeviceType() === 'mobile';
export const isTablet = () => getDeviceType() === 'tablet';
export const isDesktop = () => getDeviceType() === 'desktop';

export default useDevice;
