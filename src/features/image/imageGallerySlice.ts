import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGallery } from '@vision/core';
import { AsyncData, InitAsyncData } from 'models/store';
import { fetchGalleries } from 'services/galleriesService';
import { AppThunk, RootState } from 'store';

// #region SLICE
export interface ImagesState {
  list: AsyncData<IGallery[]>;
  item: AsyncData<IGallery>;
}

const initialState: ImagesState = {
  item: InitAsyncData<IGallery>({} as IGallery),
  list: InitAsyncData<IGallery[]>([]),
};

export const imageGallerySlice = createSlice({
  initialState,
  name: 'gallery.images',
  reducers: {
    setImageGalleries: (state: ImagesState, action: PayloadAction<IGallery[]>) => {
      state.list.data = action.payload;
    },
    setImageGallery: (state: ImagesState, action: PayloadAction<IGallery>) => {
      state.item.data = action.payload;
    },
    setImageGalleryError: (state: ImagesState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
      state.item.error = action.payload;
    },
    setImageGalleryLoading: (state: ImagesState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },
  },
});

export const {
  setImageGallery,
  setImageGalleries,
  setImageGalleryLoading,
  setImageGalleryError,
} = imageGallerySlice.actions;

// #endregion

// #region ACTIONS
export const fetchImageGalleriesAction = ({
  projectId
}: {
  projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    dispatch(setImageGalleryLoading(true));
    try {
      const res = await fetchGalleries({
        projectId,
        type: 'image'
      });
      dispatch(setImageGalleries(res.response.data));
    } catch (error) {
      dispatch(setImageGalleryError(error));
    } finally {
      dispatch(setImageGalleryLoading(false));
    }
  };
// #endregion

export default imageGallerySlice.reducer;
