import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICreature } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface CreaturesState {
    list: AsyncData<ICreature[]>;
    item: AsyncData<ICreature>;
}

const initialState: CreaturesState = {
  item: InitAsyncData<ICreature>({} as ICreature),
  list: InitAsyncData<ICreature[]>([]),
};

const sliceName = SLICES.creatures;

export const creaturesSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setCreatureData: (state: CreaturesState, action: PayloadAction<ICreature>) => {
      state.item.data = action.payload;
    },
    setCreatureError: (state: CreaturesState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setCreatureLoading: (state: CreaturesState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setCreaturesData: (state: CreaturesState, action: PayloadAction<ICreature[]>) => {
      state.list.data = action.payload;
    },
    setCreaturesError: (state: CreaturesState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setCreaturesLoading: (state: CreaturesState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
// #endregion

// #region FIREBASE
export const createCreatureStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError,
}: {
    projectId?: string,
    data: ICreature,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setCreatureLoading(true));
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
      dispatch(setCreatureData(res?.data));
      onSuccess?.(res?.data);
    } else {
      dispatch(setCreatureError(res?.error));
      onError?.(res.error || res);
    }
  } catch (error) {
    dispatch(setCreatureError(error));
    onError?.(error);
  } finally {
    dispatch(setCreatureLoading(false));
  }
};

export const fetchCreaturesStoreAction = ({
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

    dispatch(setCreaturesLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: sliceName,
        workspaceId,
      });

      // @ts-ignore
      dispatch(setCreaturesData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setCreaturesError(error));
      onError?.(error);
    } finally {
      dispatch(setCreaturesLoading(false));
    }
  };

export const updateCreaturesStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
    projectId?: string,
    data: ICreature,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setCreaturesLoading(true));
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

      slice: 'creatures',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setCreatureData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setCreatureError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setCreaturesError(error));
    onError?.(error);
  } finally {
    dispatch(setCreaturesLoading(false));
  }
};

export const deleteCreaturesStoreAction = ({
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

  dispatch(setCreaturesLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'creatures',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setCreaturesError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setCreaturesError(error));
    onError?.(error);
  } finally {
    dispatch(setCreaturesLoading(false));
  }
};
// #endregion

export const {
  setCreatureData,
  setCreatureLoading,
  setCreatureError,
  setCreaturesData,
  setCreaturesLoading,
  setCreaturesError
} = creaturesSlice.actions;

export default creaturesSlice.reducer;
