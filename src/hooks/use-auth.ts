import { persistor } from 'store';
import { useAppDispatch } from 'store/hooks';
import { clearPersistedStore, setUser } from 'features/app/appSlice';
import { setProjectsError } from 'features/projects/projectsSlice';

import { logOut } from 'utils/firebase';
import useAppUser from './use-app-user';
import { useNavigate } from 'react-router-dom';
import { IUser } from '@vision/core';

const useAuth = (): {
    user: IUser | null,
    handleSignOut: () => void
} => {
  const dispatch = useAppDispatch();
  const { user } = useAppUser();
  const navigate = useNavigate();

  const handleSignOut = (): void => {
    persistor.purge().then(() => {
      persistor.flush();
    });

    dispatch(setProjectsError(null));
    dispatch(clearPersistedStore({
      type: 'app/clearPersistedStore'
    }));

    logOut()
      .then(() => {
        dispatch(setUser(null));
        navigate('/auth/login');
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Logout ERROR', error);
      });
  };


  return {
    handleSignOut,
    user,
  };
};

export default useAuth;