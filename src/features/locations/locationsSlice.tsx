import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILocation } from '@vision/core';
import { groupBy } from 'lodash';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface LocationsState {
  list: AsyncData<ILocation[]>;
  item: AsyncData<ILocation>;
}

const initialState: LocationsState = {
  item: InitAsyncData<ILocation>({} as ILocation),
  list: InitAsyncData<ILocation[]>([]),
};

// Define slice name
const sliceName = SLICES.locations;

// Create the slice
export const locationsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Reducer functions
    setLocationData: (state: LocationsState, action: PayloadAction<ILocation>) => {
      state.item.data = action.payload;
    },
    setLocationError: (state: LocationsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setLocationLoading: (state: LocationsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    setLocationsData: (state: LocationsState, action: PayloadAction<ILocation[]>) => {
      state.list.data = action.payload;
    },
    setLocationsError: (state: LocationsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setLocationsLoading: (state: LocationsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});

// Export actions
export const {
  setLocationData,
  setLocationLoading,
  setLocationError,
  setLocationsData,
  setLocationsLoading,
  setLocationsError,
} = locationsSlice.actions;
// #endregion

// Async action creators using AppThunk
export const createLocationStoreAction = ({
  projectId,
  data,
  onError,
  onSuccess,
}: {
  projectId?: string;
  data: ILocation;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setLocationLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now,
      },
      projectId,
      slice: sliceName,
      workspaceId,
    });
    if (res.status === 200) {
      dispatch(setLocationData(res.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setLocationError(res.error));
      onError?.(res.error || res);
    }
  } catch (error) {
    dispatch(setLocationError(error));
    onError?.(error);
  } finally {
    dispatch(setLocationLoading(false));
  }
};

export const fetchLocationsStoreAction = ({
  projectId,
  onError,
  onSuccess,
}: {
  projectId: string;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setLocationsLoading(true));
  try {
    const res = await readCollection({
      projectId,
      slice: sliceName,
      workspaceId,
    });

    groupBy(res, 'galleryId');
    // @ts-ignore
    dispatch(setLocationsData(res));
    onSuccess?.(res);
  } catch (error) {
    dispatch(setLocationsError(error));
    onError?.(error);
  } finally {
    dispatch(setLocationsLoading(false));
  }
};

export const updateLocationsStoreAction = ({
  projectId,
  data,
  onSuccess,
  onError,
}: {
  projectId?: string;
  data: ILocation;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setLocationsLoading(true));
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

      slice: 'locations',

      workspaceId,
    });

    if (res.status === 200) {
      dispatch(setLocationData(res.data));
      onSuccess?.(res.data);
    } else {
      dispatch(setLocationError(res.error));
      onError?.(res);
    }
  } catch (error) {
    dispatch(setLocationsError(error));
    onError?.(error);
  } finally {
    dispatch(setLocationsLoading(false));
  }
};

export const deleteLocationsStoreAction = ({
  projectId,
  id,
  onSuccess,
  onError,
}: {
  projectId?: string;
  id?: string;
  onSuccess?: (res: any) => void;
  onError?: (error: any) => void;
}): AppThunk => async (dispatch, getState: () => RootState) => {
  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setLocationsLoading(true));
  try {
    const res = await deleteDocument({
      id: id as string,
      projectId: projectId as string,
      slice: 'locations',
      workspaceId,
    });

    if (res.status === 200) {
      onSuccess?.(res.data);
    } else {
      dispatch(setLocationsError(res));
      onError?.(res);
    }
    return res;
  } catch (error) {
    dispatch(setLocationsError(error));
    onError?.(error);
  } finally {
    dispatch(setLocationsLoading(false));
  }
};

// Export the reducer as default
export default locationsSlice.reducer;
