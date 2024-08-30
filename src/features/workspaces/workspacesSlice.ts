import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IWorkspace } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection } from 'utils/firebase';

// #region SLICE
export interface WorkspacesState {
  list: AsyncData<IWorkspace[]>;
  item: AsyncData<IWorkspace>;
}

const initialState: WorkspacesState = {
  item: InitAsyncData<IWorkspace>({} as IWorkspace),
  list: InitAsyncData<IWorkspace[]>([]),
};

const sliceName = SLICES.workspaces;

export const workspacesSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setWorkspaceData: (state: WorkspacesState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setWorkspaceError: (state: WorkspacesState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setWorkspaceLoading: (state: WorkspacesState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setWorkspacesData: (state: WorkspacesState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setWorkspacesError: (state: WorkspacesState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setWorkspacesLoading: (state: WorkspacesState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const createWorkspaceStoreAction = ({
  projectId,
  data,
  customId,
}: {
  projectId?: string,
  data: IWorkspace,
  customId?: string
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setWorkspaceLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      customId,
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now,
        id: customId
      },
      projectId: workspaceId as string,
      slice: sliceName,
      workspaceId

    });
    if (res.status === 200) {
      dispatch(setWorkspaceData(res?.data));
    } else {
      dispatch(setWorkspaceError(res?.error));
    }
  } catch (error) {
    dispatch(setWorkspaceError(error));
  } finally {
    dispatch(setWorkspaceLoading(false));
  }
};

export const fetchWorkspacesStoreAction = ({
  workspaceId,
}: {
  workspaceId?: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const store = getState();
    // const userId = store.app.user?.email as string;

    dispatch(setWorkspacesLoading(true));
    try {
      const res = await readCollection({
        slice: sliceName,
      });

      // @ts-ignore
      dispatch(setWorkspacesData(res));
    } catch (error) {
      dispatch(setWorkspacesError(error));
    } finally {
      dispatch(setWorkspacesLoading(false));
    }
  };

export const deleteWorkspaceStoreAction = (args: { id?: string }): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const store = getState();
    // const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setWorkspacesLoading(true));
    try {
      const res = await deleteDocument({
        id: args?.id as string,
        slice: sliceName,
      });

      if (res.status === 200) {
        dispatch(setWorkspaceData(null));
      } else {
        // @ts-ignore
        dispatch(setWorkspaceError(res?.error));
      }
    } catch (error) {
      dispatch(setWorkspacesError(error));
    } finally {
      dispatch(setWorkspacesLoading(false));
    }
  };
// #endregion

export const {
  setWorkspaceData,
  setWorkspaceLoading,
  setWorkspaceError,
  setWorkspacesData,
  setWorkspacesLoading,
  setWorkspacesError,
} = workspacesSlice.actions;

export default workspacesSlice.reducer;
