import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGallery } from '@vision/core';
import { AsyncData, InitAsyncData } from 'models/store';
import { fetchGalleries } from 'services/galleriesService';
import { AppThunk, RootState } from 'store';


// #region SLICE
export interface VideosState {
    list: AsyncData<IGallery[]>;
    item: AsyncData<IGallery>;
}

const initialState: VideosState = {
  item: InitAsyncData<IGallery>({} as IGallery),
  list: InitAsyncData<IGallery[]>([]),
};

export const videoGallerySlice = createSlice({
  initialState,
  name: 'gallery.videos',
  reducers: {
    setVideoGalleries: (state: VideosState, action: PayloadAction<any[]>) => {
      state.list.data = action.payload;
    },
    setVideoGallery: (state: VideosState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setVideoGalleryError: (state: VideosState, action: PayloadAction<any>) => {
      state.list.error = action.payload;
      state.item.error = action.payload;
    },
    setVideoGalleryLoading: (state: VideosState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },

  },
});
// #endregion

// #region ACTIONS
export const fetchVideoGalleriesAction = ({
  projectId
}: {
    projectId: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().generators.list;
    dispatch(setVideoGalleryLoading(true));
    try {
      const res = await fetchGalleries({
        projectId,
        type: 'video'
      });
      dispatch(setVideoGalleries(res.response.data));
    } catch (error) {
      // @ts-ignore
      dispatch(setVideoGalleryError(error));
    } finally {
      dispatch(setVideoGalleryLoading(false));
    }
  };
// #endregion

export const {
  setVideoGallery,
  setVideoGalleries,
  setVideoGalleryLoading,
  setVideoGalleryError
} = videoGallerySlice.actions;

export default videoGallerySlice.reducer;
