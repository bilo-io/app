import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDialogue } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface DialoguesState {
    list: AsyncData<IDialogue[]>;
    item: AsyncData<IDialogue>;
}

const initialState: DialoguesState = {
  item: InitAsyncData<IDialogue>({} as IDialogue),
  list: InitAsyncData<IDialogue[]>([]),
};

const sliceName = SLICES.dialogues;

export const dialogueGallerySlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setDialogueData: (state: DialoguesState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setDialogueError: (state: DialoguesState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setDialogueLoading: (state: DialoguesState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setDialoguesData: (state: DialoguesState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setDialoguesError: (state: DialoguesState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setDialoguesLoading: (state: DialoguesState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
// #region FIREBASE
export const createDialogueStoreAction = ({
  projectId,
  data,
}: {
  projectId?: string,
  data: IDialogue
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setDialogueLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },
      projectId: projectId as string,
      slice: 'dialogues',
      workspaceId
    });
    if (res.status === 200) {
      dispatch(setDialogueData(res?.data));
    } else {
      dispatch(setDialogueError(res?.error));
    }
  } catch (error) {
    dispatch(setDialogueError(error));
  } finally {
    dispatch(setDialogueLoading(false));
  }
};

export const fetchDialoguesStoreAction = ({
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

    dispatch(setDialoguesLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: 'dialogues',
        workspaceId,
      });

      // @ts-ignore
      dispatch(setDialoguesData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setDialoguesError(error));
      onError?.(error);
    } finally {
      dispatch(setDialoguesLoading(false));
    }
  };

export const updateDialoguesStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
  projectId?: string,
  data: IDialogue,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setDialoguesLoading(true));
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

      slice: 'dialogues',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setDialogueData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setDialogueError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setDialoguesError(error));
    onError?.(error);
  } finally {
    dispatch(setDialoguesLoading(false));
  }
};

export const deleteDialoguesStoreAction = ({
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

  dispatch(setDialoguesLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'dialogues',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setDialoguesError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setDialoguesError(error));
    onError?.(error);
  } finally {
    dispatch(setDialoguesLoading(false));
  }
};
// #endregion

// #endregion

export const {
  setDialogueData,
  setDialogueLoading,
  setDialogueError,
  setDialoguesData,
  setDialoguesLoading,
  setDialoguesError,
} = dialogueGallerySlice.actions;

export default dialogueGallerySlice.reducer;
