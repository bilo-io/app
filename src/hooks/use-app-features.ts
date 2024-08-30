import { IFeature } from '@vision/core';
import { fetchAppFeaturesAction } from 'features/app/appSlice';
import { useEffect } from 'react';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useAppFeatures = (): IFeature[] => {
  const dispatch = useAppDispatch();

  const features = useAppSelector((state: RootState) => state.app.features) || [];

  useEffect(() => {
    if (features?.length === 0 || !!features) {
      dispatch(fetchAppFeaturesAction({ }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return features;
};