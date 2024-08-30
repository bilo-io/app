import { fetchAppRatesAction, fetchAppSubscriptionsAction } from 'features/app/appSlice';
import { useEffect } from 'react';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useAppSubscriptions = () => {
  const dispatch = useAppDispatch();

  const subscriptions = useAppSelector((state: RootState) => state.app.subscriptions) || [];

  useEffect(() => {
    if (subscriptions?.length === 0) {
      dispatch(fetchAppSubscriptionsAction({ }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return subscriptions;
};

export const useAppRates = () => {
  const dispatch = useAppDispatch();

  const rates = useAppSelector((state: RootState) => state.app.rates) || [];

  useEffect(() => {
    if (rates) {
      dispatch(fetchAppRatesAction({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return rates;
};