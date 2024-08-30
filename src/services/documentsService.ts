import { IDocument } from '@vision/core';
import { callApi } from 'utils/api';

/**
 * Fetches either all projects, or a specific project by ID if passed as optional parameter `{ id: string }`
**/
export const fetchDocuments = async ({
  id,
  // projectId,
}: {
    id?: string | number;
    projectId: string;
}): Promise<any> => callApi<IDocument[]>({
  // projectId,
  DEBUG: false,

  endpoint: `documents${id !== undefined ? '/' + id : ''}`,

  method: 'GET'
});
