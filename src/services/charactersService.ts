import { ICharacter } from '@vision/core';
import { callApi } from 'utils/api';

/**
 * Fetches either all characters, or a specific character by ID if passed as optional parameter `{ id: string }`
**/
export const fetchCharacters = async ({
  id,
  projectId,
}: {
    id?: string | number;
    projectId: string
}): Promise<any> => callApi<ICharacter[]>({
  DEBUG: false,
  endpoint: `/characters${id !== undefined ? ' / ' + id : ''}?projectId=${projectId}`,
  method: 'GET'
});
