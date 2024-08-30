import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES, SliceType } from 'models/store';
import { fetchUsers } from 'services/usersService';
import { AppThunk, RootState } from 'store';
import { createDocument, readCollection } from 'utils/firebase';

// #region SLICE
export interface UsersState {
  item: AsyncData<IUser | null>;
  list: AsyncData<IUser[]>;
}

const sliceName: SliceType = SLICES.users;

const initialState: UsersState = {
  item: InitAsyncData<IUser>({} as IUser),
  list: InitAsyncData<IUser[]>([]),
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state: UsersState, action: PayloadAction<IUser | null>) => {
      state.item.data = action.payload;
    },
    setUserError: (state: UsersState, action: PayloadAction<unknown>) => {
      state.item.error = action.payload;
    },
    setUserLoading: (state: UsersState, action: PayloadAction<boolean>) => {
      state.item.loading = action.payload;
    },
    setUsers: (state: UsersState, action: PayloadAction<IUser[] | any[] | null>) => {
      state.list.data = action.payload;
    },
    setUsersError: (state: UsersState, action: PayloadAction<unknown>) => {
      state.list.error = action.payload;
    },
    setUsersLoading: (state: UsersState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const fetchUserAction = (): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().projects.list;
    try {
      const res = await fetchUsers({}) as IUser;
      dispatch(setUser(res));
    } catch (error) {
      // @ts-ignore
      dispatch(setUserError(error));
    }
  };

export const fetchUsersStoreAction = (): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    // const currentValue = getState().projects.list;
    dispatch(setUsersLoading(true));
    try {
      const res = await readCollection({
        slice: sliceName,
      }) as IUser[];

      dispatch(setUsers(res));
    } catch (error) {
      // @ts-ignore
      dispatch(setUserError(error));
    } finally {
      dispatch(setUsersLoading(false));
    }
  };

export const createUsersStoreAction = ({
  data,
  customId,
  onSuccess,
  onError
}: {
  data: IUser,
  customId?: string,
  onSuccess?: (res: any) => void,
  onError?: (error: any) => void
}): AppThunk => async (dispatch, getState: () => RootState) => {

  // const store = getState();
  // const workspaceId = store.workspaces?.item?.data?.id as string;

  dispatch(setUserLoading(true));
  try {
    const now = new Date().toISOString();
    const res = await createDocument({
      customId,
      // workspaceId,
      data: {
        ...data,
        dateCreated: now,
        dateUpdated: now
      },

      slice: sliceName
    });

    if (res.status === 200) {
      dispatch(setUser(res?.data));
      onSuccess?.(res?.data);
    } else {
      dispatch(setUserError(res?.error));
      onError?.(res?.error || res);
    }
  } catch (error) {
    dispatch(setUserError(error));
  } finally {
    dispatch(setUserLoading(false));
  }
};
// #endregion

export const {
  setUser,
  setUserLoading,
  setUserError,
  setUsers,
  setUsersLoading,
  setUsersError
} = userSlice.actions;

export default userSlice.reducer;
