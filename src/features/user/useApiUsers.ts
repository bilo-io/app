import { IUser } from '@vision/core';
import { AsyncData, AsyncDataHook } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { createUsersStoreAction, fetchUsersStoreAction, setUser } from './userSlice';
import { log } from 'utils/logger';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useApiUsers: () => AsyncDataHook<IUser> = (): {
  list: AsyncData<IUser[]>,
  item: AsyncData<IUser | null>,
  set: (args: { user: IUser }) => void,
  create: (args: {
    data: IUser,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  read: (args: {
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  update: (args: {
    userId: string, data: IUser,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  delete: (args: {
    userId: string,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.users);

  // CRUD
  const dispatchCreate = (args: { data: IUser }): void => dispatch(createUsersStoreAction(args));
  const dispatchRead = (): void => dispatch(fetchUsersStoreAction());
  const dispatchUpdate = (args: { userId: string, data: IUser }): void => {
    log('dispatch => update', args);
  };
  const dispatchDelete = (args: { userId: string }): void => {
    log('dispatch => delete', args);
  };
  const dispatchSetUser = (args: { user: IUser }): void => {
    dispatch(setUser(args.user as IUser));
  };

  return {
    create: dispatchCreate,
    delete: dispatchDelete,
    item,
    list,
    read: dispatchRead,
    set: dispatchSetUser,
    update: dispatchUpdate
  };
};