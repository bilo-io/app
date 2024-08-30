import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IControls } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { fetchGalleries } from 'services/galleriesService';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface ControlsState {
    list: AsyncData<IControls[]>;
    item: AsyncData<IControls>;
}

const initialState: ControlsState = {
  item: InitAsyncData<IControls>({} as IControls),
  list: InitAsyncData<IControls[]>([]),
};

const sliceName = SLICES.controls;

export const controlsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setControlData: (state: ControlsState, action: PayloadAction<IControls | null>) => {
      state.item.data = action.payload;
    },
    setControlError: (state: ControlsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setControlLoading: (state: ControlsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setControlsData: (state: ControlsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setControlsError: (state: ControlsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setControlsLoading: (state: ControlsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
export const fetchControlGalleriesAction = ({
  projectId
}: {
    projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().generators.list;
    dispatch(setControlsLoading(true));
    try {
      const res = await fetchGalleries({
        projectId,
        type: 'character',
      });
      dispatch(setControls(res.response.data));
    } catch (error) {
      // @ts-ignore
      dispatch(setControlsError(error));
    } finally {
      dispatch(setControlsLoading(false));
    }
  };
// #endregion

// #region FIREBASE
export const createControlStoreAction = ({
  projectId,
  data,
}: {
  projectId?: string,
  data: IControls
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setControlLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },
      projectId: projectId as string,
      slice: 'controls',
      workspaceId
    });
    if (res.status === 200) {
      dispatch(setControlData(res?.data));
    } else {
      dispatch(setControlError(res?.error));
    }
  } catch (error) {
    dispatch(setControlError(error));
  } finally {
    dispatch(setControlLoading(false));
  }
};

export const fetchControlsStoreAction = ({
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

    dispatch(setControlsLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: 'controls',
        workspaceId,
      });

      // @ts-ignore
      dispatch(setControls(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setControlsError(error));
      onError?.(error);
    } finally {
      dispatch(setControlsLoading(false));
    }
  };

export const updateControlsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
  projectId?: string,
  data: IControls,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setControlsLoading(true));
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

      slice: 'controls',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setControlData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setControlError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setControlsError(error));
    onError?.(error);
  } finally {
    dispatch(setControlsLoading(false));
  }
};

export const deleteControlsStoreAction = ({
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

  dispatch(setControlsLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'controls',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setControlsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setControlsError(error));
    onError?.(error);
  } finally {
    dispatch(setControlsLoading(false));
  }
};
// #endregion

export const {
  setControlData,
  setControlLoading,
  setControlError,
  setControlsData: setControls,
  setControlsLoading,
  setControlsError
} = controlsSlice.actions;

export default controlsSlice.reducer;
