import { ISegment as IStory } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createSegmentStoreAction,
  deleteSegmentsStoreAction,
  fetchSegmentsStoreAction,
  setSegmentData,
  setSegmentsData,
  updateSegmentsStoreAction,
} from './segmentsSlice';

const useApiSegments: () => AsyncDataHook<IStory> = (): {
  list: AsyncData<IStory[]>,
  item: AsyncData<IStory>,
  create: (args: {
    projectId?: string, data: IStory,
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
    data: IStory,
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
  const { list, item } = useAppSelector((state: RootState) => state.segments);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: IStory, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(createSegmentStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(fetchSegmentsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, id: string, data: IStory, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(updateSegmentsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }) => {
    dispatch(deleteSegmentsStoreAction(args));
  };

  // CLEANING
  const dispatchClearItem = (): {
    payload: IStory;
    type: string;
  } => dispatch(setSegmentData(InitAsyncData<IStory>({} as IStory).data));
  const dispatchClearList = (): {
    payload: IStory[];
    type: string;
  } => dispatch(setSegmentsData(InitAsyncData<IStory[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: IStory) => !!item?.galleryId)
        ?.map((item: IStory) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiSegments;