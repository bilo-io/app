import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISegment } from '@vision/core';

import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface SegmentsState {
    list: AsyncData<ISegment[]>;
    item: AsyncData<ISegment>;
}

const initialState: SegmentsState = {
  item: InitAsyncData<ISegment>({} as ISegment),
  list: InitAsyncData<ISegment[]>([]),
};

const sliceName = SLICES.segments;

export const segmentsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setSegmentData: (state: SegmentsState, action: PayloadAction<ISegment>) => {
      state.item.data = action.payload;
    },
    setSegmentError: (state: SegmentsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setSegmentLoading: (state: SegmentsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setSegmentsData: (state: SegmentsState, action: PayloadAction<ISegment[]>) => {
      state.list.data = action.payload;
    },
    setSegmentsError: (state: SegmentsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setSegmentsLoading: (state: SegmentsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
// #endregion

// #region FIREBASE
export const createSegmentStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError,
}: {
    projectId?: string,
    data: ISegment,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setSegmentLoading(true));
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
      dispatch(setSegmentData(res?.data));
      onSuccess?.(res?.data);
    } else {
      dispatch(setSegmentError(res?.error));
      onError?.(res.error || res);
    }
  } catch (error) {
    dispatch(setSegmentError(error));
    onError?.(error);
  } finally {
    dispatch(setSegmentLoading(false));
  }
};

export const fetchSegmentsStoreAction = ({
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

    dispatch(setSegmentsLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: sliceName,
        workspaceId,
      });

      // @ts-ignore
      dispatch(setSegmentsData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setSegmentsError(error));
      onError?.(error);
    } finally {
      dispatch(setSegmentsLoading(false));
    }
  };

export const updateSegmentsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
    projectId?: string,
    data: ISegment,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setSegmentsLoading(true));
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

      slice: 'segments',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setSegmentData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setSegmentError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setSegmentsError(error));
    onError?.(error);
  } finally {
    dispatch(setSegmentsLoading(false));
  }
};

export const deleteSegmentsStoreAction = ({
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

  dispatch(setSegmentsLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'segments',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setSegmentsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setSegmentsError(error));
    onError?.(error);
  } finally {
    dispatch(setSegmentsLoading(false));
  }
};
// #endregion

export const {
  setSegmentData,
  setSegmentLoading,
  setSegmentError,
  setSegmentsData,
  setSegmentsLoading,
  setSegmentsError
} = segmentsSlice.actions;

export default segmentsSlice.reducer;
