import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDocument, IGallery } from '@vision/core';
import { groupBy } from 'lodash';
import { AsyncData, InitAsyncData } from 'models/store';
import { fetchDocuments } from 'services/documentsService';
import { fetchGalleries } from 'services/galleriesService';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

import { AppThunk, RootState } from '../../store';

// #region SLICE
export interface DocumentsState {
    item: AsyncData<IGallery>;
    list: AsyncData<IGallery[]>;
}

const initialState: DocumentsState = {
  item: InitAsyncData<IGallery>({} as IGallery),
  list: InitAsyncData<IGallery[]>([]),
};

export const documentsSlice = createSlice({
  initialState,
  name: 'documents',
  reducers: {
    setDocument: (state: DocumentsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setDocumentError: (state: DocumentsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setDocumentGalleries: (state: DocumentsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    // Galleries
    setDocumentGallery: (state: DocumentsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },

    setDocumentGalleryError: (state: DocumentsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
      state.item.error = action.payload;
    },

    setDocumentGalleryLoading: (state: DocumentsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },


    setDocumentLoading: (state: DocumentsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },

    setDocuments: (state: DocumentsState, action: PayloadAction<any>) => {
      state.list.data = action.payload;
    },
    setDocumentsError: (state: DocumentsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setDocumentsLoading: (state: DocumentsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const fetchDocumentsAction = ({
  projectId
}: {
    projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    dispatch(setDocumentsLoading(true));

    try {
      const res = await fetchDocuments({ projectId });
      dispatch(setDocuments(res.response.data));
    } catch (error) {
      // @ts-ignore
      dispatch(setDocumentsError(error.message));
    } finally {
      dispatch(setDocumentsLoading(false));
    }
  };

export const fetchDocumentAction = ({ id, projectId }: { id: number | string, projectId: string }): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    try {
      const res = await fetchDocuments({ id, projectId });
      dispatch(setDocument(res));
    } catch (error) {
      // @ts-ignore
      dispatch(setDocumentError(error.message));
    }
  };

export const fetchDocumentGalleriesAction = ({
  projectId
}: {
    projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().generators.list;
    dispatch(setDocumentGalleryLoading(true));
    try {
      const res = await fetchGalleries({
        projectId,
        type: 'document'
      });
      dispatch(setDocumentGalleries(res.response.data));
    } catch (error) {
      // @ts-ignore
      dispatch(setDocumentGalleryError(error));
    } finally {
      dispatch(setDocumentGalleryLoading(false));
    }
  };
// #endregion

// #region FIREBASE
export const fetchDocumentsStoreAction = ({
  projectId
}: {
    projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setDocumentGalleryLoading(true));
    dispatch(setDocumentGalleries([]));
    try {
      const res = await readCollection({
        projectId,
        slice: 'documents',
        workspaceId,
      });

      groupBy(res, 'galleryId');
      // @ts-ignore
      dispatch(setDocumentGalleries(res));
      dispatch(setDocumentGalleryLoading(false));
    } catch (error) {
      dispatch(setDocumentGalleryError(error));
    } finally {
      dispatch(setDocumentGalleryLoading(false));
    }
  };

export const saveDocumentStoreAction = ({
  projectId,
  data,
  id,
}: {
    projectId?: string,
    data: any,
    id: string,
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setDocumentGalleryLoading(true));
    try {
      const res = await updateDocument({
        data,
        id,
        projectId: projectId as string,
        slice: 'documents',
        workspaceId,
      });

      groupBy(res, 'galleryId');
      // @ts-ignore
      dispatch(setDocument(res));
      dispatch(setDocumentGalleryLoading(false));
    } catch (error) {
      dispatch(setDocumentGalleryError(error));
    } finally {
      dispatch(setDocumentGalleryLoading(false));
    }
  };

// #region FIREBASE
export const createDocumentStoreAction = ({
  projectId,
  data,
}: {
  projectId?: string,
  data: IDocument
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setDocumentLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },
      projectId: projectId as string,
      slice: 'documents',
      workspaceId
    });
    if (res.status === 200) {
      dispatch(setDocument(res?.data));
    } else {
      dispatch(setDocumentError(res?.error));
    }
  } catch (error) {
    dispatch(setDocumentError(error));
  } finally {
    dispatch(setDocumentLoading(false));
  }
};

// export const fetchDocumentsStoreAction = ({
//   projectId,
//   onSuccess,
//   onError
// }: {
//   projectId: string,
//   onSuccess?: (res: any) => void,
//   onError?: (error: any) => void
// }): AppThunk =>
//   async (dispatch, getState: () => RootState) => {
//     const store = getState();
//     const workspaceId = store.workspaces?.item?.data?.id as string;

//     dispatch(setDocumentsLoading(true));
//     try {
//       const res = await readCollection({
//         slice: 'documents',
//         workspaceId,
//         projectId,
//       });

//       // @ts-ignore
//       dispatch(setDocumentsData(res));
//       onSuccess?.(res);
//     } catch (error) {
//       dispatch(setDocumentsError(error));
//       onError?.(error);
//     } finally {
//       dispatch(setDocumentsLoading(false));
//     }
//   };

export const updateDocumentsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
  projectId?: string,
  data: IDocument,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setDocumentsLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await updateDocument({
      data: {
        ...data,
        dateUpdated: now,
      },
      // @ts-ignore
      id: data?.ref as string,

      projectId: projectId as string,

      slice: 'documents',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setDocument(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setDocumentError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setDocumentsError(error));
    onError?.(error);
  } finally {
    dispatch(setDocumentsLoading(false));
  }
};

export const deleteDocumentsStoreAction = ({
  projectId,
  id,
  onSuccess,
  onError
}: {
  projectId?: string,
  id?: string,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setDocumentsLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'documents',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setDocumentsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setDocumentsError(error));
    onError?.(error);
  } finally {
    dispatch(setDocumentsLoading(false));
  }
};
// #endregion

// #endregion

export const {
  setDocument,
  setDocumentLoading,
  setDocumentError,
  setDocuments,
  setDocumentsLoading,
  setDocumentsError,
  // Galleries
  setDocumentGallery,
  setDocumentGalleries,
  setDocumentGalleryLoading,
  setDocumentGalleryError
} = documentsSlice.actions;

export default documentsSlice.reducer;
