import { IControls } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { createControlStoreAction, deleteControlsStoreAction, fetchControlsStoreAction, setControlData, setControls, updateControlsStoreAction } from './controlsSlice';

const useApiControls: () => AsyncDataHook<IControls> = (): {
  list: AsyncData<IControls[]>,
  item: AsyncData<IControls>,
  create: (args: { projectId?: string, data: IControls }) => void,
  read: (args: { projectId: string, id?: string }) => void,
  update: (args: { projectId?: string, id: string, data: IControls }) => void,
  delete: (args: { projectId?: string, id: string }) => void,
  clearItem?: () => void,
  clearList?: () => void,
  galleryIds?: () => (string | undefined)[]
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.controls);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: IControls, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createControlStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchControlsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, data: IControls, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateControlsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteControlsStoreAction(args));
  };


  // CLEANING
  const dispatchClearItem = () => dispatch(setControlData(InitAsyncData<IControls>({} as IControls).data));
  const dispatchClearList = () => dispatch(setControls(InitAsyncData<IControls[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: IControls) => !!item?.galleryId)
        ?.map((item: IControls) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiControls;