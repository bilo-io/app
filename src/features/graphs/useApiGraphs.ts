import { IGraph } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { createGraphStoreAction, deleteGraphsStoreAction, fetchGraphsStoreAction, setGraphData, setGraphsData, updateGraphsStoreAction } from './graphsSlice';

const useApiGraphs: () => AsyncDataHook<IGraph> = (): {
  list: AsyncData<IGraph[]>,
  item: AsyncData<IGraph>,
  create: (args: { data: IGraph }) => void,
  read: (args: { projectId: string, id?: string }) => void,
  update: (args: { projectId?: string, data: IGraph }) => void,
  delete: (args: { projectId?: string, id: string }) => void
  clearItem?: () => void,
  clearList?: () => void,
  galleryIds?: () => (string | undefined)[]
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.graphs);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: IGraph, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createGraphStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchGraphsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, data: IGraph, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateGraphsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteGraphsStoreAction(args));
  };
  // CLEANING
  const dispatchClearItem = (): void => {
    dispatch(setGraphData(InitAsyncData<IGraph>({} as IGraph).data));
  };
  const dispatchClearList = (): void => {
    dispatch(setGraphsData(InitAsyncData<IGraph[]>([]).data));
  };

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: IGraph) => !!item?.galleryId)
        ?.map((item: IGraph) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiGraphs;