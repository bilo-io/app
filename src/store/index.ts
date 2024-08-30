import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { enhancer } from 'addon-redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or 'redux-persist/lib/localStorage' for local storage

// reducers
import app from 'features/app/appSlice';
import characters from 'features/characters/charactersSlice';
import controls from 'features/controls/controlsSlice';
import creatures from 'features/creatures/creaturesSlice';
import dialogues from 'features/dialogues/dialoguesSlice';
import documents from 'features/documents/documentsSlice';
import graphs from 'features/graphs/graphsSlice';
import images from 'features/image/imageGallerySlice';
import locations from 'features/locations/locationsSlice';
import objects from 'features/objects/objectsSlice';
import projects from 'features/projects/projectsSlice';
import segments from 'features/segments/segmentsSlice';
import sounds from 'features/sound/soundGallerySlice';
import tenants from 'features/tenants/tenantsSlice';
import transports from 'features/transports/transportsSlice';
import users from 'features/user/userSlice';
import videos from 'features/video/videoGallerySlice';
import workspaces from 'features/workspaces/workspacesSlice';

// const initialiseState = <T>() => {
//   return {
//     item: InitAsyncData<T>({} as T),
//     list: InitAsyncData<T[]>([])
//   };
// };

// const emptyReducer = <T>(state = initialiseState<T>(), action: any): any => {
//   switch (action.type) {
//   default:
//     return state;
//   }
// };

const rootReducer = combineReducers({
  app,
  characters,
  controls,
  creatures,
  dialogues,
  documents,
  // galleries: combineReducers({
  // }),
  graphs,
  images,
  locations,
  objects,
  projects,
  segments,
  sounds,
  tenants,
  transports,
  users,
  videos,
  workspaces,
});

const persistConfig = {
  key: 'root',
  storage,
  // You can add additional options here...
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  enhancers: [
    enhancer
  ],

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
      }
    }),

  // reducer: rootReducer,
  reducer: persistedReducer
});




export const persistor = persistStore(store);

export const purgeStore = ():void => {
  persistor.purge();
};

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
