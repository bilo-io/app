
import { IUser } from '@vision/core';
import { setAppBreadcrumbResource, setUser } from 'features/app/appSlice';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

export const useAppUser = (): {
  user: IUser,
  setAppUser: (user: IUser) => void,
  setUserCredits: (user: IUser) => void,
  isAdmin: () => boolean
} => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.app);
  const setAppUser = (user: IUser) => dispatch(setUser(user));

  const setUserCredits = (user: IUser) => {

  };

  return {
    isAdmin: ():boolean => user?.isAdmin || user?.email === 'bilo.lwabona@gmail.com',
    setAppUser,
    setUserCredits,
    user: user as IUser
  };
};

export const useAppBreadcrumbs = (): {
  breadcrumb: string,
  setBreadcrumb: (data: string) => void;
} => {
  const dispatch = useAppDispatch();
  const setBreadcrumb = (data: string) => dispatch(setAppBreadcrumbResource(data));

  const breadcrumb: string = useAppSelector((state: RootState) => state.app.breadcrumbResource);

  return { breadcrumb, setBreadcrumb };
};

export default useAppUser;
