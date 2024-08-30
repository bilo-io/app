import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { IProject } from '@vision/core';
import { fetchProjects } from 'services/projectsService';
import { AppThunk, RootState } from '../../store';
import { createDocument, deleteDocument, readCollection, updateDocument } from 'utils/firebase';

// #region SLICE
export interface ProjectsState {
  item: AsyncData<IProject & { ref?: string }>;
  list: AsyncData<(IProject & { ref?:string })[]>;
}

const initialState: ProjectsState = {
  item: InitAsyncData<IProject>({} as IProject),
  list: InitAsyncData<IProject[]>([]),
};

const sliceName = SLICES.projects;

export const projectsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    setNewData: (state: ProjectsState, action: PayloadAction<any>) => {
      state.list.data = action.payload;
    },
    setProject: (state: ProjectsState, action: PayloadAction<any>) => {
      state.item.data = action.payload;
    },
    setProjects: (state: ProjectsState, action: PayloadAction<any>) => {
      state.list.data = action.payload;
    },
    setProjectsError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.item.error = action.payload;
      state.list.error = action.payload;
    },
    setProjectsLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.list.loading = action.payload;
      state.item.loading = action.payload;
    },
  },
});
// #endregion

// #region ACTIONS
export const fetchProjectsAction = (): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    dispatch(setProjectsLoading(true));

    try {
      const apiCall = await fetchProjects({});
      const projects = apiCall.response?.data;
      dispatch(setProjects(projects));
      dispatch(setNewData(projects));
      dispatch(setProjectsLoading(false));
    } catch (error) {
      // @ts-ignore
      dispatch(setProjectsError(error.message));
    } finally {
      dispatch(setProjectsLoading(false));
    }
  };

export const fetchProjectAction = ({ id }: { id: number | string }): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    try {
      const res = await fetchProjects({ id });
      dispatch(setProject(res));
    } catch (error) {
      // @ts-ignore
      dispatch(setProjectsError(error.message));
    }
  };


// TODO: create project store action
export const createProjectStoreAction = (args: { data: IProject }): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setProjectsLoading(true));
    try {
      const now = new Date().toISOString();
      const res = await createDocument({
        data: {
          data: {
            ...args.data,
            data: {
              ...args.data,
              dateCreated: now,
              dateUpdated: now
            }
          },
          name: args?.data?.name
        },
        projectId: 'all',
        slice: sliceName,
        workspaceId
      });

      if (res.status === 200) {
        dispatch(setProject(res?.data));
      } else {
        dispatch(setProjectsError(res?.error));
      }
    } catch (error) {
      dispatch(setProjectsError(error));
    } finally {
      dispatch(setProjectsLoading(false));
    }
  };


export const fetchProjectsStoreAction = (): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    console.log({ workspaceId });

    dispatch(setProjectsLoading(true));
    try {
      const res = await readCollection({
        projectId: 'all',
        slice: sliceName,
        workspaceId: workspaceId,
      });

      // @ts-ignore
      dispatch(setProjects(res?.map((p: any) => ({ ref: p.ref, ...p.data }))));
      dispatch(setProjectsLoading(false));
    } catch (error) {
      dispatch(setProjectsError(error));
    } finally {
      dispatch(setProjectsLoading(false));
    }
  };

export const updateProjectStoreAction = (args: { data: IProject }): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setProjectsLoading(true));
    try {
      const now = new Date().toISOString();
      const res = await updateDocument({
        data: {
          data: {
            ...args.data,

            dateUpdated: now,
          },
          name: args?.data?.name
        },
        id: args?.data?.id as string,
        projectId: 'all',
        slice: sliceName,
        workspaceId: workspaceId
      });

      if (res?.status === 200) {
        dispatch(setProject(res?.data));
      } else {
        dispatch(setProjectsError(res?.error));
      }
    } catch (error) {
      dispatch(setProjectsError(error));
    } finally {
      dispatch(setProjectsLoading(false));
    }
  };

export const deleteProjectStoreAction = (args: { id: string }): AppThunk =>
  async (dispatch, getState: () => RootState) => {
    const store = getState();
    const workspaceId = store.workspaces?.item?.data?.id as string;

    dispatch(setProjectsLoading(true));
    try {
      const res = await deleteDocument({
        id: args?.id as string,
        projectId: 'all',
        slice: sliceName,
        workspaceId: workspaceId,
      });

      if (res.status === 200) {
        dispatch(setProject(null));
      } else {
        // @ts-ignore
        dispatch(setProjectsError(res?.error));
      }
    } catch (error) {
      dispatch(setProjectsError(error));
    } finally {
      dispatch(setProjectsLoading(false));
    }
  };
// #endregion

export const {
  setProject,
  setProjects,
  setNewData,
  setProjectsLoading,
  setProjectsError
} = projectsSlice.actions;

export default projectsSlice.reducer;
