import { IDocument } from '@vision/core';
import _ from 'lodash';
import { AsyncData, AsyncDataHook } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import { createDocumentStoreAction, deleteDocumentsStoreAction, fetchDocumentsStoreAction, setDocument, setDocuments, updateDocumentsStoreAction } from './documentsSlice';

const useApiDocuments: () => AsyncDataHook<IDocument> = (): {
  list: AsyncData<IDocument[]>,
  item: AsyncData<IDocument>,
  create: (args: { projectId?: string, data: IDocument }) => void,
  read: (args: { projectId: string }) => void,
  update: (args: { projectId?: string, id: string, data: IDocument }) => void,
  delete: (args: { projectId?: string, id: string }) => void,
  clearItem?: () => void,
  clearList?: () => void,
  galleryIds?: () => (string | undefined)[]
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.documents);

  // CRUD
  const dispatchCreate = (args: { projectId?: string, data: IDocument, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(createDocumentStoreAction(args));
  };
  const dispatchRead = (args: { projectId: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(fetchDocumentsStoreAction(args));
  };
  const dispatchUpdate = (args: { projectId?: string, data: IDocument, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(updateDocumentsStoreAction(args));
  };
  const dispatchDelete = (args: { projectId?: string, id: string, onSuccess?: (res: any) => void, onError?: (error: any) => void }): void => {
    dispatch(deleteDocumentsStoreAction(args));
  };
  // CLEANING
  const dispatchClearItem = (): void => {
    dispatch(setDocument(null));
  };
  const dispatchClearList = (): void => {
    dispatch(setDocuments([]));
  };

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    galleryIds: () => _.uniq(
      list?.data
        ?.filter((item: IDocument) => !!item?.galleryId)
        ?.map((item: IDocument) => item.galleryId)
    ),
    item,
    list,
    read: dispatchRead,
    update: dispatchUpdate
  };
};

export default useApiDocuments;