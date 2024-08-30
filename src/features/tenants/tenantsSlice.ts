import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITenant } from '@vision/core';
import { groupBy } from 'lodash';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { AppThunk, RootState } from 'store';
import { createDocument, readCollection } from 'utils/firebase';

// #region SLICE
export interface TenantsState {
  list: AsyncData<ITenant[]>;
  item: AsyncData<ITenant>;
}

const initialState: TenantsState = {
  item: InitAsyncData<ITenant>({} as ITenant),
  list: InitAsyncData<ITenant[]>([]),
};

const sliceName = SLICES.tenants;

export const tenantsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Item
    setTenantData: (state: TenantsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setTenantError: (state: TenantsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
    },
    setTenantLoading: (state: TenantsState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    // List
    setTenantsData: (state: TenantsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setTenantsError: (state: TenantsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
    },
    setTenantsLoading: (state: TenantsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const createTenantStoreAction = ({
  projectId,
  tenantId,
  data,
}: {
  projectId?: string,
  tenantId?: string,
  data: ITenant
}): AppThunk => async (dispatch, getState: () => RootState) => {

  const store = getState();
  const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setTenantLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },
      projectId: tenantId as string,
      slice: sliceName,
      workspaceId
    });

    if (res.status === 200) {
      dispatch(setTenantData(res?.data));
    } else {
      dispatch(setTenantError(res?.error));
    }
  } catch (error) {
    dispatch(setTenantError(error));
  } finally {
    dispatch(setTenantLoading(false));
  }
};

export const fetchTenantsStoreAction = ({
  tenantId,
}: {
  tenantId?: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setTenantsLoading(true));
    try {
      const res = await readCollection({
        projectId: tenantId as string,
        slice: sliceName,
        workspaceId,
      });

      groupBy(res, 'galleryId');
      // @ts-ignore
      dispatch(setTenantsData(res));
      dispatch(setTenantsLoading(false));
    } catch (error) {
      dispatch(setTenantsError(error));
    } finally {
      dispatch(setTenantsLoading(false));
    }
  };
// #endregion

export const {
  setTenantData,
  setTenantLoading,
  setTenantError,
  setTenantsData,
  setTenantsLoading,
  setTenantsError,
} = tenantsSlice.actions;

export default tenantsSlice.reducer;
