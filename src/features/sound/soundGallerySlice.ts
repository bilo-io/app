import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGallery } from '@vision/core';
import { AsyncData, InitAsyncData } from 'models/store';
import { fetchGalleries } from 'services/galleriesService';
import { AppThunk, RootState } from 'store';


// #region SLICE
export interface SoundsState {
    list: AsyncData<IGallery[]>;
    item: AsyncData<IGallery>;
}

const initialState: SoundsState = {
  item: InitAsyncData<IGallery>({} as IGallery),
  list: InitAsyncData<IGallery[]>([]),
};

export const soundGallerySlice = createSlice({
  initialState,
  name: 'gallery.sounds',
  reducers: {
    setSoundGalleries: (state: SoundsState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setSoundGallery: (state: SoundsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setSoundGalleryError: (state: SoundsState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
      state.item.error = action.payload;
    },
    setSoundGalleryLoading: (state: SoundsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const fetchSoundGalleriesAction = ({
  projectId
}: {
    projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().generators.list;
    dispatch(setSoundGalleryLoading(true));
    try {
      const res = await fetchGalleries({
        projectId,
        type: 'sound'
      });
      dispatch(setSoundGalleries(res.response.data));
    } catch (error) {
      // @ts-ignore
      dispatch(setSoundGalleryError(error));
    } finally {
      dispatch(setSoundGalleryLoading(false));
    }
  };
// #endregion

export const {
  setSoundGallery,
  setSoundGalleries,
  setSoundGalleryLoading,
  setSoundGalleryError
} = soundGallerySlice.actions;

export default soundGallerySlice.reducer;
