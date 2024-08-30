import { ILocation } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createLocationStoreAction,
  deleteLocationsStoreAction,
  fetchLocationsStoreAction,
  setLocationData,
  setLocationsData,
  updateLocationsStoreAction
} from './locationsSlice';

export const useApiLocations: () => AsyncDataHook<ILocation> = (): {
  list: AsyncData<ILocation[]>,
  item: AsyncData<ILocation>,
  create: (args: {
    projectId?: string, data: ILocation,
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
    data: ILocation,
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
  const { list, item } = useAppSelector((state: RootState) => state.locations);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: ILocation, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createLocationStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, id?: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchLocationsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, id: string, data: ILocation, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateLocationsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteLocationsStoreAction(args));
  };

  // CLEANING
  const dispatchClearItem = (): void => {
    dispatch(setLocationData(InitAsyncData<ILocation>({} as ILocation).data));
  };
  const dispatchClearList = (): void => {
    dispatch(setLocationsData(InitAsyncData<ILocation[]>([]).data));
  };

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: ILocation) => !!item?.galleryId)
        ?.map((item: ILocation) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiLocations;
