import { useParams } from 'react-router-dom';

export const usePageId = () => {
  const params = useParams();
  return params?.id;
};