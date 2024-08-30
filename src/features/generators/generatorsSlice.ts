import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGenerator } from '@vision/core';
import { AsyncData, InitAsyncData } from 'models/store';
import { fetchGenerators } from 'services/generatorsService';

import { AppThunk, RootState } from '../../store';


// #region SLICE
export interface GeneratorsState {
    list: AsyncData<IGenerator[]>;
    item: AsyncData<IGenerator>;
}

const initialState: GeneratorsState = {
  item: InitAsyncData<IGenerator>({} as IGenerator),
  list: InitAsyncData<IGenerator[]>([]),
};

export const generatorsSlice = createSlice({
  initialState,
  name: 'generators',
  reducers: {
    setGenerator: (state: GeneratorsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setGenerators: (state: GeneratorsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setGeneratorsError: (state: GeneratorsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
      state.item.error = action.payload;
    },
    setGeneratorsLoading: (state: GeneratorsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
export const fetchGeneratorsAction = (): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().generators.list;
    try {
      const res = await fetchGenerators({});
      dispatch(setGenerators(res));
    } catch (error) {
      // @ts-ignore
      dispatch(setGeneratorsError(error));
    }
  };
// #endregion

export const {
  setGenerators,
  setGeneratorsLoading,
  setGeneratorsError
} = generatorsSlice.actions;

export default generatorsSlice.reducer;
