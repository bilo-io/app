import { ICharacter } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createCharacterStoreAction,
  deleteCharactersStoreAction,
  fetchCharactersStoreAction,
  setCharacterData,
  setCharactersData,
  updateCharactersStoreAction,
} from './charactersSlice';

const useApiCharacters: () => AsyncDataHook<ICharacter> = (): {
  list: AsyncData<ICharacter[]>,
  item: AsyncData<ICharacter>,
  create: (args: {
    projectId?: string, data: ICharacter,
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
    data: ICharacter,
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
  const { list, item } = useAppSelector((state: RootState) => state.characters);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: ICharacter, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createCharacterStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchCharactersStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, id: string, data: ICharacter, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateCharactersStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteCharactersStoreAction(args));
  };

  // CLEANING
  const dispatchClearItem = (): {
    payload: ICharacter;
    type: string;
  } => dispatch(setCharacterData(InitAsyncData<ICharacter>({} as ICharacter).data));
  const dispatchClearList = (): {
    payload: ICharacter[];
    type: string;
  } => dispatch(setCharactersData(InitAsyncData<ICharacter[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: ICharacter) => !!item?.galleryId)
        ?.map((item: ICharacter) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiCharacters;