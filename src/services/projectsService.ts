import { callApi } from 'utils/api';

/**
 * Fetches either all projects, or a specific project by ID if passed as optional parameter `{ id: string }`
**/
export const fetchProjects = async ({
  id
}: {
    id?: string | number;
    }): Promise<any> => await callApi({
  endpoint: `projects${id !== undefined ? '/' + id : ''}`,
  method: 'GET',
});
