import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBlueprint } from '@vision/core';
import { AsyncData, InitAsyncData } from 'models/store';
import { fetchBlueprints } from 'services/blueprintsService';

import { AppThunk, RootState } from '../../store';


// #region SLICE
export interface BlueprintsState {
    item: AsyncData<IBlueprint>;
    list: AsyncData<IBlueprint[]>;
}

const initialState: BlueprintsState = {
  item: InitAsyncData<IBlueprint>({} as IBlueprint),
  list: InitAsyncData<IBlueprint[]>([]),
};

export const blueprintsSlice = createSlice({
  initialState,
  name: 'blueprints',
  reducers: {
    setBlueprint: (state: BlueprintsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setBlueprints: (state: BlueprintsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setBlueprintsError: (state: BlueprintsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
      state.item.error = action.payload;
    },
    setBlueprintsLoading: (state: BlueprintsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const fetchBlueprintsAction = (): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().blueprints.list;
    try {
      const res = await fetchBlueprints({});
      dispatch(setBlueprints(res));
    } catch (error) {
      // @ts-ignore
      dispatch(setBlueprintsError(error));
    }
  };
// #endregion

export const {
  setBlueprints,
  setBlueprintsError,
  setBlueprintsLoading
} = blueprintsSlice.actions;

export default blueprintsSlice.reducer;
