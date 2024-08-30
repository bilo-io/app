const API_BASE_URL = process.env.REACT_APP_VISION_API_URL || 'https://vision-api-dev.vercel.app/api';

/**
 * Fetches either all blueprints, or a specific blueprint by ID if passed as optional parameter `{ id: string }`
**/
export const fetchBlueprints = async ({
  id
}: {
    id?: string | number;
    }): Promise<any> => {
  const url = `${API_BASE_URL}/blueprints${id ? '/' + id : ''}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
    // return error;
  }
};