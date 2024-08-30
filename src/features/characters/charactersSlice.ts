import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { fetchGalleries } from 'services/galleriesService';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface CharactersState {
  list: AsyncData<ICharacter[]>;
  item: AsyncData<ICharacter>;
}

const initialState: CharactersState = {
  item: InitAsyncData<ICharacter>({} as ICharacter),
  list: InitAsyncData<ICharacter[]>([]),
};

const sliceName = SLICES.characters;

export const charactersSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setCharacterData: (state: CharactersState, action: PayloadAction<ICharacter>) => {
      state.item.data = action.payload;
    },
    setCharacterError: (state: CharactersState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setCharacterLoading: (state: CharactersState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setCharactersData: (state: CharactersState, action: PayloadAction<ICharacter[]>) => {
      state.list.data = action.payload;
    },
    setCharactersError: (state: CharactersState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setCharactersLoading: (state: CharactersState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
export const fetchCharacterGalleriesAction = ({
  projectId
}: {
  projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().generators.list;
    dispatch(setCharactersLoading(true));
    try {
      const res = await fetchGalleries({
        projectId,
        type: 'character',
      });
      dispatch(setCharactersData(res.response.data));
    } catch (error) {
      // @ts-ignore
      dispatch(setCharactersError(error));
    } finally {
      dispatch(setCharactersLoading(false));
    }
  };
// #endregion

// #region FIREBASE
export const createCharacterStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError,
}: {
  projectId?: string,
    data: ICharacter,
    onSuccess?: (res: any) => void,
    onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id;

  dispatch(setCharacterLoading(true));
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
      dispatch(setCharacterData(res?.data));
      onSuccess?.(res?.data);
    } else {
      dispatch(setCharacterError(res?.error));
      onError?.(res.error || res);
    }
  } catch (error) {
    dispatch(setCharacterError(error));
    onError?.(error);
  } finally {
    dispatch(setCharacterLoading(false));
  }
};

export const fetchCharactersStoreAction = ({
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

    dispatch(setCharactersLoading(true));
    try {
      const res = await readCollection({
        projectId,
        slice: sliceName,
        workspaceId,
      });

      // @ts-ignore
      dispatch(setCharactersData(res));
      onSuccess?.(res);
    } catch (error) {
      dispatch(setCharactersError(error));
      onError?.(error);
    } finally {
      dispatch(setCharactersLoading(false));
    }
  };

export const updateCharactersStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError
}: {
  projectId?: string,
  data: ICharacter,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setCharactersLoading(true));
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

      slice: 'characters',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      dispatch(setCharacterData(res?.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setCharacterError(res?.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setCharactersError(error));
    onError?.(error);
  } finally {
    dispatch(setCharactersLoading(false));
  }
};

export const deleteCharactersStoreAction = ({
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

  dispatch(setCharactersLoading(true));
  try {
    const res = await deleteDocument({
      // @ts-ignore
      id,

      projectId: projectId as string,

      slice: 'characters',

      workspaceId: workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setCharactersError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setCharactersError(error));
    onError?.(error);
  } finally {
    dispatch(setCharactersLoading(false));
  }
};
// #endregion

export const {
  setCharacterData,
  setCharacterLoading,
  setCharacterError,
  setCharactersData,
  setCharactersLoading,
  setCharactersError
} = charactersSlice.actions;

export default charactersSlice.reducer;
