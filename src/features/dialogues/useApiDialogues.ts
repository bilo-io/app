import { IDialogue } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { createDialogueStoreAction, deleteDialoguesStoreAction, fetchDialoguesStoreAction, setDialogueData, setDialoguesData, updateDialoguesStoreAction } from './dialoguesSlice';

const useApiDialogues: () => AsyncDataHook<IDialogue> = (): {
  list: AsyncData<IDialogue[]>,
  item: AsyncData<IDialogue>,
  create: (args: { projectId?: string, data: IDialogue }) => void,
  read: (args: { projectId: string, id?: string }) => void,
  update: (args: { projectId?: string, id: string, data: IDialogue }) => void,
  delete: (args: { projectId?: string, id: string }) => void,
  clearItem?: () => void,
  clearList?: () => void,
  galleryIds?: () => (string | undefined)[]
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.dialogues);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: IDialogue, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createDialogueStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchDialoguesStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, data: IDialogue, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateDialoguesStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteDialoguesStoreAction(args));
  };
  // CLEANING
  const dispatchClearItem = (): void => {
    dispatch(setDialogueData(InitAsyncData<IDialogue>({} as IDialogue).data));
  };
  const dispatchClearList = (): void => {
    dispatch(setDialoguesData(InitAsyncData<IDialogue[]>([]).data));
  };

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: IDialogue) => !!item?.galleryId)
        ?.map((item: IDialogue) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiDialogues;