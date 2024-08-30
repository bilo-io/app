import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IObject } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface ObjectsState {
    list: AsyncData<IObject[]>;
    item: AsyncData<IObject>;
}

const initialState: ObjectsState = {
  item: InitAsyncData<IObject>({} as IObject),
  list: InitAsyncData<IObject[]>([]),
};

const sliceName = SLICES.objects;

export const objectsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setObjectData: (state: ObjectsState, action: PayloadAction<IObject>) => {
      state.item.data = action.payload;
    },
    setObjectError: (state: ObjectsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setObjectLoading: (state: ObjectsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setObjectsData: (state: ObjectsState, action: PayloadAction<IObject[]>) => {
      state.list.data = action.payload;
    },
    setObjectsError: (state: ObjectsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setObjectsLoading: (state: ObjectsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
// #endregion

// #region FIREBASE
export const createObjectStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError,
}: {
    projectId?: string,
    data: IObject,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setObjectLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },
      projectId: projectId as string,
      slice: sliceName,
      workspaceId

    });
    if (res.status === 200) {
      dispatch(setObjectData(res?.data));
      onSuccess?.(res?.data);
    } else {
      dispatch(setObjectError(res?.error));
      onError?.(res.error || res);
    }
  } catch (error) {
    dispatch(setObjectError(error));
    onError?.(error);
  } finally {
    dispatch(setObjectLoading(false));
  }
};

export const fetchObjectsStoreAction = ({
  projectId,
  onSuccess,
  onError
}: {
    projectId: string,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setObjectsLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: sliceName,
        workspaceId,
      });

      // @ts-ignore
      dispatch(setObjectsData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setObjectsError(error));
      onError?.(error);
    } finally {
      dispatch(setObjectsLoading(false));
    }
  };

export const updateObjectsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
    projectId?: string,
    data: IObject,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setObjectsLoading(true));
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
      slice: SLICES.objects,
      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setObjectData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setObjectError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setObjectsError(error));
    onError?.(error);
  } finally {
    dispatch(setObjectsLoading(false));
  }
};

export const deleteObjectsStoreAction = ({
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

  dispatch(setObjectsLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'objects',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setObjectsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setObjectsError(error));
    onError?.(error);
  } finally {
    dispatch(setObjectsLoading(false));
  }
};
// #endregion

export const {
  setObjectData,
  setObjectLoading,
  setObjectError,
  setObjectsData,
  setObjectsLoading,
  setObjectsError
} = objectsSlice.actions;

export default objectsSlice.reducer;
