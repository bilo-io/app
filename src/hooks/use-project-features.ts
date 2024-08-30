import { RootState } from 'store';
import { useAppSelector } from 'store/hooks';

export const useProjectFeatures = ():string[] => {
  const features = useAppSelector((state: RootState) => state?.projects?.item?.data?.features) || [];

  const filteredFeatures = features?.filter((feature: string) => (
    ![
      'images',
      'videos',
      'sounds',
      'chats',
      'maps',
      'sketches'
    ].includes(feature)
  ));

  return filteredFeatures;
};