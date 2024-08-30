import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGraph } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface GraphsState {
    list: AsyncData<IGraph[]>;
    item: AsyncData<IGraph>;
}

const initialState: GraphsState = {
  item: InitAsyncData<IGraph>({} as IGraph),
  list: InitAsyncData<IGraph[]>([]),
};

const sliceName = SLICES.graphs;

export const graphsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setGraphData: (state: GraphsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setGraphError: (state: GraphsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setGraphLoading: (state: GraphsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setGraphsData: (state: GraphsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setGraphsError: (state: GraphsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setGraphsLoading: (state: GraphsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
// #region FIREBASE
export const createGraphStoreAction = ({
  projectId,
  data,
}: {
  projectId?: string,
  data: IGraph
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setGraphLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },
      projectId: projectId as string,
      slice: 'graphs',
      workspaceId
    });
    if (res.status === 200) {
      dispatch(setGraphData(res?.data));
    } else {
      dispatch(setGraphError(res?.error));
    }
  } catch (error) {
    dispatch(setGraphError(error));
  } finally {
    dispatch(setGraphLoading(false));
  }
};

export const fetchGraphsStoreAction = ({
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

    dispatch(setGraphsLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: 'graphs',
        workspaceId,
      });

      // @ts-ignore
      dispatch(setGraphsData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setGraphsError(error));
      onError?.(error);
    } finally {
      dispatch(setGraphsLoading(false));
    }
  };

export const updateGraphsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
  projectId?: string,
  data: IGraph,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setGraphsLoading(true));
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

      slice: 'graphs',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setGraphData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setGraphError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setGraphsError(error));
    onError?.(error);
  } finally {
    dispatch(setGraphsLoading(false));
  }
};

export const deleteGraphsStoreAction = ({
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

  dispatch(setGraphsLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'graphs',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setGraphsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setGraphsError(error));
    onError?.(error);
  } finally {
    dispatch(setGraphsLoading(false));
  }
};
// #endregion

// #endregion

export const {
  setGraphData,
  setGraphLoading,
  setGraphError,
  setGraphsData,
  setGraphsLoading,
  setGraphsError,
} = graphsSlice.actions;

export default graphsSlice.reducer;
