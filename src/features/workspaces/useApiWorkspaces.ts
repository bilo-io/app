import { IWorkspace } from '@vision/core';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  createWorkspaceStoreAction,
  deleteWorkspaceStoreAction,
  fetchWorkspacesStoreAction,
  setWorkspaceData,
  setWorkspacesData
} from './workspacesSlice';
import { log } from 'utils/logger';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useApiWorkspaces: () => AsyncDataHook<IWorkspace> = (): {
  list: AsyncData<IWorkspace[]>,
  item: AsyncData<IWorkspace>,
  create: (args: { data: IWorkspace, customId?: string }) => void,
  read: () => void,
  update: (args: { projectId?: string, tenantId?: string, data: IWorkspace }) => void,
  delete: (args: { id?: string }) => void,
  clearItem?: () => void,
  clearList?: () => void,
  setItem?: (data: IWorkspace) => void
} => {
  const dispatch = useAppDispatch();

  const { list, item } = useAppSelector((state: RootState) => state.workspaces);

  const dispatchCreate = (args: { data: IWorkspace, customId?: string }): void => {
    dispatch(createWorkspaceStoreAction(args));
  };

  const dispatchRead = (): void => {
    dispatch(fetchWorkspacesStoreAction({}));
  };

  const dispatchUpdate = (args: { projectId?: string, tenantId?: string, data: IWorkspace }): void => {
    log('dispatch => update', args);
    // Include actual dispatch logic if missing
  };

  const dispatchDelete = (args: { id?: string }): void => {
    dispatch(deleteWorkspaceStoreAction(args));
  };

  const dispatchClearItem = (): void => {
    dispatch(setWorkspaceData(InitAsyncData<IWorkspace>({} as IWorkspace).data));
  };

  const dispatchClearList = (): void => {
    dispatch(setWorkspacesData(InitAsyncData<IWorkspace[]>([]).data));
  };

  const dispatchSetItem = (data: IWorkspace): void => {
    dispatch(setWorkspaceData(data));
  };

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    item,
    list,
    read: dispatchRead,
    setItem: dispatchSetItem,
    update: dispatchUpdate,
  };
};

export default useApiWorkspaces;
