/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { ApiRequestMethod } from 'components/Core';

import { detectEnv } from './environment';
import { log } from './logger';

const env = detectEnv();

export const API_BASE_URL = env.serverUrl;

export interface ApiCallOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url?: string;
  endpoint?: string;
  DEBUG?: boolean;
  data?: any;
}

export const callApi = async <T>(
  options: ApiCallOptions
): Promise<{
    request: {
        url: string,
        method: ApiRequestMethod,
        payload?: any,
    },
    response: {
        data: T,
        status: number,
        error?: any
    }
}> => {
  const { method, url, endpoint, DEBUG, data } = options;
  const apiUrl: string = (endpoint ? `${API_BASE_URL}/${endpoint}` : url) as string;

  const headers: HeadersInit = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  const requestOptions: RequestInit = {
    body: data ? JSON.stringify(data) : undefined,
    headers,
    method,
  };

  if (DEBUG) {
    log('API Request:', apiUrl, method, data);
  }

  try {
    const response = await fetch(apiUrl as string, requestOptions);

    if (!response.ok) {
      // If the response status is not in the range 200-299, it's considered an error.
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData: T = await response.json();

    if (DEBUG) {
      log.success('API Response:', responseData);
    }

    return {
      request: {
        method: method as ApiRequestMethod,
        payload: data,
        url: apiUrl,
      },
      response: {
        data: responseData,
        status: response.status,
        // error: response
      }
    };
  } catch (error) {
    if (DEBUG) {
      log.error('API Request Error:', error);
    }
    throw new Error('Failed to fetch data', error as any);
  }
};
