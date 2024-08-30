import { IGallery } from '@vision/core';
import { callApi } from 'utils/api';

export const fetchGalleries = async ({
  // id,
  type,
  projectId,
}: {
    id?: string | number;
    type: 'image' | 'sound' | 'video' | 'dialogue' | 'graph' | 'character' | 'document',
    projectId: string,
}): Promise<any> => await callApi<IGallery[]>({
  DEBUG: false,
  endpoint: `galleries?type=${type}&projectId=${projectId}`,
  method: 'GET'
});
