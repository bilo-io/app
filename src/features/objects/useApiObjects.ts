import { IObject } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createObjectStoreAction,
  deleteObjectsStoreAction,
  fetchObjectsStoreAction,
  setObjectData,
  setObjectsData,
  updateObjectsStoreAction,
} from './objectsSlice';

const useApiObjects: () => AsyncDataHook<IObject> = (): {
  list: AsyncData<IObject[]>,
  item: AsyncData<IObject>,
  create: (args: {
    projectId?: string, data: IObject,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  read: (args: {
    projectId: string,
    id?: string,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  update: (args: {
    projectId?: string,
    id: string,
    data: IObject,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  delete: (args: {
    projectId?: string,
    id: string,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
  }) => void,
  clearItem?: () => void,
  clearList: () => void,
  galleryIds?: () => (string | undefined)[]
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.objects);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: IObject, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(createObjectStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(fetchObjectsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, id: string, data: IObject, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(updateObjectsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(deleteObjectsStoreAction(args));
  };

  // CLEANING
  const dispatchClearItem = (): {
    payload: IObject;
    type: string;
  } => dispatch(setObjectData(InitAsyncData<IObject>({} as IObject).data));
  const dispatchClearList = (): {
    payload: IObject[];
    type: string;
  } => dispatch(setObjectsData(InitAsyncData<IObject[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    // galleryIds: () => _.uniq(
    //   list?.data
    //     ?.filter((item: IObject) => !!item?.galleryId)
    //     ?.map((item: IObject) => item.galleryId)
    // ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiObjects;