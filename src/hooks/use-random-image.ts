import { images as staticImages } from 'pages/Auth/Auth.utils';
import { useEffect, useMemo, useState } from 'react';

import { useAccountImages } from './use-account-images';

export const useRandomImage = (duration: number, imgArray?: string[]) => {
  const accountImages = useAccountImages();
  const imageArray = useMemo(() => imgArray || accountImages, [imgArray, accountImages]);
  const images = useMemo(() => imageArray?.length > 0 ? imageArray : staticImages, [imageArray]);

  const [imageUrl, setImageUrl] = useState<string>('');

  const setRandomImage = () => {
    const index = Math.floor(Math.random() * images.length);
    setImageUrl(images[index]);
  };

  useEffect(() => {
    setRandomImage();

    const imageLooperInterval = setInterval(() => {
      setRandomImage();
    }, duration);

    return () => clearInterval(imageLooperInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, duration]);

  return imageUrl;
};

export default useRandomImage;
