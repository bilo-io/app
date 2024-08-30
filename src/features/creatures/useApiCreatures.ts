import { ICreature } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createCreatureStoreAction,
  deleteCreaturesStoreAction,
  fetchCreaturesStoreAction,
  setCreatureData,
  setCreaturesData,
  updateCreaturesStoreAction,
} from './creaturesSlice';

const useApiCreatures: () => AsyncDataHook<ICreature> = (): {
  list: AsyncData<ICreature[]>,
  item: AsyncData<ICreature>,
  create: (args: {
    projectId?: string, data: ICreature,
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
    data: ICreature,
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
  const { list, item } = useAppSelector((state: RootState) => state.creatures);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: ICreature, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createCreatureStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchCreaturesStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, id: string, data: ICreature, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateCreaturesStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteCreaturesStoreAction(args));
  };

  // CLEANING
  const dispatchClearItem = (): {
    payload: ICreature;
    type: string;
  } => dispatch(setCreatureData(InitAsyncData<ICreature>({} as ICreature).data));
  const dispatchClearList = (): {
    payload: ICreature[];
    type: string;
  } => dispatch(setCreaturesData(InitAsyncData<ICreature[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: ICreature) => !!item?.galleryId)
        ?.map((item: ICreature) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiCreatures;