import { IFeature, IRate, ISubscription } from '@vision/core';
import { callApi } from 'utils/api';

export const fetchAppFeatures = async ({
  id,
}: {
    id?: string;
}): Promise<any> => callApi<IFeature[]>({
  DEBUG: false,
  endpoint: `features${id !== undefined ? ' / ' + id : ''}`,
  method: 'GET'
});

export const fetchAppSubscriptions = async ({
  id,
}: {
  id?: string;
}): Promise<any> => callApi<ISubscription[]>({
  DEBUG: false,
  endpoint: `subscriptions${id !== undefined ? ' / ' + id : ''}`,
  method: 'GET'
});

export const fetchAppRates = async ({
  id,
}: {
  id?: string;
}): Promise<any> => callApi<IRate>({
  DEBUG: false,
  endpoint: `rates${id !== undefined ? ' / ' + id : ''}`,
  method: 'GET'
});