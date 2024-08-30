import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITransport } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface TransportsState {
    list: AsyncData<ITransport[]>;
    item: AsyncData<ITransport>;
}

const initialState: TransportsState = {
  item: InitAsyncData<ITransport>({} as ITransport),
  list: InitAsyncData<ITransport[]>([]),
};

const sliceName = SLICES.transports;

export const transportsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setTransportData: (state: TransportsState, action: PayloadAction<ITransport>) => {
      state.item.data = action.payload;
    },
    setTransportError: (state: TransportsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setTransportLoading: (state: TransportsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setTransportsData: (state: TransportsState, action: PayloadAction<ITransport[]>) => {
      state.list.data = action.payload;
    },
    setTransportsError: (state: TransportsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setTransportsLoading: (state: TransportsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
// #endregion

// #region FIREBASE
export const createTransportStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError,
}: {
    projectId?: string,
    data: ITransport,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setTransportLoading(true));
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
      dispatch(setTransportData(res?.data));
      onSuccess?.(res?.data);
    } else {
      dispatch(setTransportError(res?.error));
      onError?.(res.error || res);
    }
  } catch (error) {
    dispatch(setTransportError(error));
    onError?.(error);
  } finally {
    dispatch(setTransportLoading(false));
  }
};

export const fetchTransportsStoreAction = ({
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

    dispatch(setTransportsLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: sliceName,
        workspaceId,
      });

      // @ts-ignore
      dispatch(setTransportsData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setTransportsError(error));
      onError?.(error);
    } finally {
      dispatch(setTransportsLoading(false));
    }
  };

export const updateTransportsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
    projectId?: string,
    data: ITransport,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setTransportsLoading(true));
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
      slice: SLICES.transports,
      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setTransportData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setTransportError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setTransportsError(error));
    onError?.(error);
  } finally {
    dispatch(setTransportsLoading(false));
  }
};

export const deleteTransportsStoreAction = ({
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

  dispatch(setTransportsLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'transports',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setTransportsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setTransportsError(error));
    onError?.(error);
  } finally {
    dispatch(setTransportsLoading(false));
  }
};
// #endregion

export const {
  setTransportData,
  setTransportLoading,
  setTransportError,
  setTransportsData,
  setTransportsLoading,
  setTransportsError
} = transportsSlice.actions;

export default transportsSlice.reducer;
