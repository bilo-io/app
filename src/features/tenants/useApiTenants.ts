import { ITenant } from '@vision/core';
import { AsyncData, AsyncDataHook } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { createTenantStoreAction, fetchTenantsStoreAction } from './tenantsSlice';

export const useApiTenants: () => AsyncDataHook<ITenant> = (): {
  list: AsyncData<ITenant[]>,
  item: AsyncData<ITenant>,
  create: (args: { data: ITenant }) => void,
  read: (args: { projectId?: string, tenantId?: string, id?: string }) => void,
  update: (args: { projectId?: string, tenantId?: string, data: ITenant }) => void,
  delete: (args: { projectId?: string }) => void
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.tenants);

  // CRUD
  const dispatchCreate = (args: { data: ITenant, tenantId?: string }) => dispatch(createTenantStoreAction(args));
  const dispatchRead = (args: { tenantId?: string, id?: string }) => dispatch(fetchTenantsStoreAction(args));
  const dispatchUpdate = (args: { projectId?: string, data: ITenant }) => console.log('dispatch => update', args);
  const dispatchDelete = (args: { projectId?: string }) => console.log('dispatch => delete', args);

  return {
    create: dispatchCreate,
    delete: dispatchDelete,
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};