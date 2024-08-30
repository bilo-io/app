import { IGeneratorType } from '@vision/core';
import axios from 'axios';
import { ApiRequestMethod } from 'components/Core';
import { API_BASE_URL, callApi } from 'utils/api';

// export type IGeneratorType = 'Image' | 'Text' | 'Video' | 'Sound';
/**
 * Fetches either all generators, or a specific generator by ID if passed as optional parameter `{ id: string }`
**/
export const fetchGenerators = async ({
  id
}: {
    id?: string | number;
}): Promise<any> => {
  const url = `${API_BASE_URL}/generators${id ? '/' + id : ''}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
    // return error;
  }
};

export const AI_GEN_URL = (type: string): string => `${API_BASE_URL}/generators/create?type=${type}`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const generate = async ({
  type,
  userPrompt
}: {
    type: IGeneratorType,
    userPrompt: string
}) => {
  const url = AI_GEN_URL(type);

  try {
    // const response = await fetch(
    //     url,
    //     {
    //         method: 'POST',
    //         body: JSON.stringify({ userPrompt })
    //     })
    const response = await axios({
      data: { userPrompt },
      method: 'POST',
      url
    });

    const data = await response?.data;
    return { data, status: response.status };
  } catch (error) {
    throw new Error('Failed to fetch data');
    // return error;
  }


};

export const generateTest = async (
  {
    type,
    // userPrompt,
    projectId
  }: {
    type: IGeneratorType,
    userPrompt: string,
    projectId: string
  }): Promise<{
    request: { url: string; method: ApiRequestMethod; payload?: any; };
    response: { data: any; status: number; error?: any; };
  }> => await callApi<any>({
  DEBUG: false,
  endpoint: `generators/test?type=${type}&projectId=${projectId}`,
  method: 'GET'
});

export const generateTestCreate = async ({
  type,
  userPrompt,
  projectId
}: {
  type: IGeneratorType,
  userPrompt: string,
  projectId: string
}): Promise<{
    request: { url: string; method: ApiRequestMethod; payload?: any; };
    response: { data: any; status: number; error?: any; };
  }> => await callApi<any>({
  DEBUG: false,
  data: {
    userPrompt
  },
  endpoint: `generators/test-create?type=${type}&projectId=${projectId}`,
  method: 'POST'
});