import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFeature, IRate, ISubscription, IUser } from '@vision/core';
import { SupportedLanguages } from 'data/translations';
import { AsyncData, InitAsyncData } from 'models/store';
import {
  fetchAppFeatures,
  fetchAppRates,
  fetchAppSubscriptions
} from 'services/appService';
import { AppThunk, RootState } from 'store';
import { ITheme, dark } from 'styles/themes';
import { callApi } from 'utils/api';

export interface AppState {
  user: IUser | null;
  language: SupportedLanguages;
  theme: {
    name: string;
    theme: ITheme;
  };
  features: IFeature[] | null;
  subscriptions: ISubscription[] | null,
  rates: IRate | null,
  // rates: ISubscriptionRate | null,
  messages: AsyncData<any>
  breadcrumbResource: string;
}

const initialState: AppState = {
  breadcrumbResource: '',
  features: [],

  language: 'en',


  messages: InitAsyncData<any>(null),

  // @ts-ignore
  rates: {},

  subscriptions: [],
  theme: {
    name: 'dark',
    theme: dark
  },
  user: null
};

export const appSlice = createSlice({
  initialState,
  name: 'app',
  reducers: {
    clearPersistedStore: (state: AppState, action: PayloadAction<any>) => {
      // NB: this should be intentionally left blank
      // - gets
    },
    setAppBreadcrumbResource: (state: AppState, action: PayloadAction<string>) => {
      state.breadcrumbResource = action.payload;
    },
    setAppFeatures: (state: AppState, action: PayloadAction<IFeature[]>) => {
      state.features = action.payload;
    },
    setAppLanguage: (state: AppState, action: PayloadAction<SupportedLanguages>) => {
      state.language = action.payload;
    },
    setAppRates: (state: AppState, action: PayloadAction<IRate>) => {
      state.rates = action.payload;
    },
    setAppSubscriptions: (state: AppState, action: PayloadAction<ISubscription[]>) => {
      state.subscriptions = action.payload;
    },
    setEmailData: (state: AppState, action: PayloadAction<any>) => {
      if (state.messages !== undefined) {
        state.messages.data = action.payload;
      }
    },
    setEmailError: (state: AppState, action: PayloadAction<any>) => {
      if (state.messages !== undefined) {
        state.messages.error = action.payload;
      }
    },
    setEmailLoading: (state: AppState, action: PayloadAction<boolean>) => {
      if (state.messages !== undefined) {
        state.messages.loading = action.payload;
      }
    },
    setUser: (state: AppState, action: PayloadAction<any>) => {
      state.user = action.payload;
    }
  }
});

// #region ACTIONS
export const sendEmailToVisionAction = (payload: {
  message: string,
  subject: string,
  sender: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    dispatch(setEmailLoading(true));
    try {
      const result = await callApi({
        data: payload,
        endpoint: 'messages',
        method: 'POST'
      });
      dispatch(setEmailData(result.response.data));

    } catch (e) {
      dispatch(setEmailError(e));
    } finally {
      dispatch(setEmailLoading(false));
    }
  };

export const fetchAppFeaturesAction = ({
  id
}: {
  id?: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().projects.list;
    // dispatch(setProjectsLoading(true))
    try {

      // const features = await readCollection({
      //     slice: 'features',
      //     projectId,
      //     userId,
      // })
      // @ts-ignore
      const apiCall = await fetchAppFeatures({
        id
      });
      const features = apiCall.response.data;
      // console.log({ features: features?.[0]?.activeFeatures || features })

      // @ts-ignore
      dispatch(setAppFeatures(features?.[0]?.activeFeatures || features));
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(setProjectsLoading(false))
    }
  };

export const fetchAppSubscriptionsAction = ({
  id
}: {
  id?: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().projects.list;
    // dispatch(setProjectsLoading(true))
    try {

      // const features = await readCollection({
      //     slice: 'features',
      //     projectId,
      //     userId,
      // @ts-ignores
      // })

      const apiCall = await fetchAppSubscriptions({
        id
      });
      const subscriptions = apiCall.response.data;

      // @ts-ignore
      dispatch(setAppSubscriptions(subscriptions));
    } catch (error) {
      console.log(error);
    } finally {
      // dispatch(setSubscriptionsLoading(false))
    }
  };

export const fetchAppRatesAction = ({
  id
}: {
  id?: string
}): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    try {
      const apiCall = await fetchAppRates({
        id
      });
      const rates = apiCall.response.data;
      dispatch(setAppRates(rates));
    } catch (e) {
      console.log(e);
    }
  };

// #endregion


export const {
  setUser,
  setAppLanguage,
  setAppFeatures,
  setAppSubscriptions,
  setAppRates,
  // setAppRates,
  setEmailData,
  setEmailLoading,
  setEmailError,
  clearPersistedStore,
  setAppBreadcrumbResource,
} = appSlice.actions;

export default appSlice.reducer;