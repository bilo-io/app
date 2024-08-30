import { ITransport } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createTransportStoreAction,
  deleteTransportsStoreAction,
  fetchTransportsStoreAction,
  setTransportData,
  setTransportsData,
  updateTransportsStoreAction,
} from './transportsSlice';

const useApiTransports: () => AsyncDataHook<ITransport> = (): {
  list: AsyncData<ITransport[]>,
  item: AsyncData<ITransport>,
  create: (args: {
    projectId?: string, data: ITransport,
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
    data: ITransport,
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
  const { list, item } = useAppSelector((state: RootState) => state.transports);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: ITransport, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createTransportStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchTransportsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, id: string, data: ITransport, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateTransportsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteTransportsStoreAction(args));
  };

  // CLEANING
  const dispatchClearItem = (): {
    payload: ITransport;
    type: string;
  } => dispatch(setTransportData(InitAsyncData<ITransport>({} as ITransport).data));
  const dispatchClearList = (): {
    payload: ITransport[];
    type: string;
  } => dispatch(setTransportsData(InitAsyncData<ITransport[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    // galleryIds: () => _.uniq(
    //   list?.data
    //     ?.filter((item: ITransport) => !!item?.galleryId)
    //     ?.map((item: ITransport) => item.galleryId)
    // ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiTransports;