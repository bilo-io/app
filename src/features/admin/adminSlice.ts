/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICharacter, IControls, IDialogue, IDocument, IGraph, ILocation, IProject } from '@vision/core';
import { AsyncData, InitAsyncData, SLICES } from 'models/store';
import { fetchProjects } from 'services/projectsService';
import { createDocument, readCollection } from 'utils/firebase';

import { AppThunk, RootState } from '../../store';

// #region SLICE
export interface ProjectsState {
    projects: AsyncData<IProject[]>;
    documents: AsyncData<IDocument[]>;
    characters: AsyncData<ICharacter[]>;
    locations: AsyncData<ILocation[]>;
    dialogues: AsyncData<IDialogue[]>;
    controls: AsyncData<IControls[]>;
    graphs: AsyncData<IGraph[]>;
}

const initialState: ProjectsState = {
  characters: InitAsyncData<ICharacter[]>([]),
  controls: InitAsyncData<IControls[]>([]),
  dialogues: InitAsyncData<IDialogue[]>([]),
  documents: InitAsyncData<IDocument[]>([]),
  graphs: InitAsyncData<IGraph[]>([]),
  locations: InitAsyncData<ILocation[]>([]),
  projects: InitAsyncData<IProject[]>([]),
};

const sliceName = SLICES.projects;

export const projectsSlice = createSlice({
  initialState,
  name: sliceName,
  reducers: {
    // Characters
    setCharacters: (state: ProjectsState, action: PayloadAction<ICharacter[]>) => {
      state.characters.data = action.payload;
    },
    setCharactersError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.characters.error = action.payload;
    },
    setCharactersLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.characters.loading = action.payload;
    },
    // Controls
    setControls: (state: ProjectsState, action: PayloadAction<IControls[]>) => {
      state.controls.data = action.payload;
    },
    setControlsError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.controls.error = action.payload;
    },
    setControlsLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.controls.loading = action.payload;
    },
    // Dialogues
    setDialogues: (state: ProjectsState, action: PayloadAction<IDialogue[]>) => {
      state.dialogues.data = action.payload;
    },
    setDialoguesError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.dialogues.error = action.payload;
    },
    setDialoguesLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.dialogues.loading = action.payload;
    },
    // Documents
    setDocuments: (state: ProjectsState, action: PayloadAction<IDocument[]>) => {
      state.documents.data = action.payload;
    },
    setDocumentsError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.documents.error = action.payload;
    },
    setDocumentsLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.documents.loading = action.payload;
    },
    // Graphs
    setGraphs: (state: ProjectsState, action: PayloadAction<IGraph[]>) => {
      state.graphs.data = action.payload;
    },
    setGraphsError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.graphs.error = action.payload;
    },
    setGraphsLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.graphs.loading = action.payload;
    },
    // Locations
    setLocations: (state: ProjectsState, action: PayloadAction<ILocation[]>) => {
      state.locations.data = action.payload;
    },
    setLocationsError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.locations.error = action.payload;
    },
    setLocationsLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.locations.loading = action.payload;
    },
    // Projects
    setProjects: (state: ProjectsState, action: PayloadAction<any>) => {
      state.projects.data = action.payload;
    },
    setProjectsError: (state: ProjectsState, action: PayloadAction<any>) => {
      state.projects.error = action.payload;
    },
    setProjectsLoading: (state: ProjectsState, action: PayloadAction<boolean>) => {
      state.projects.loading = action.payload;
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
      //   dispatch(setNewData(projects))
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
      dispatch(setProjects(res));
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
      const res = await createDocument({
        data: args.data,
        projectId: 'all',
        slice: sliceName,
        workspaceId
      });

      if (res.status === 200) {
        // dispatch(setProject(res?.data))
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
    const userId = store.users.item?.data?.email as string;

    dispatch(setProjectsLoading(true));
    try {
      const res = await readCollection({
        projectId: 'all',
        slice: sliceName,
        workspaceId: userId,
      });

      // @ts-ignore
      dispatch(setProjects(res.map((p: any) => p.data)));
      dispatch(setProjectsLoading(false));
    } catch (error) {
      dispatch(setProjectsError(error));
    } finally {
      dispatch(setProjectsLoading(false));
    }
  };
// #endregion

export const {
  setProjects,
  setProjectsLoading,
  setProjectsError,

  setCharacters,
  setCharactersLoading,
  setCharactersError,

  setControls,
  setControlsLoading,
  setControlsError,

  setDialogues,
  setDialoguesLoading,
  setDialoguesError,

  setGraphs,
  setGraphsLoading,
  setGraphsError,

  setLocations,
  setLocationsLoading,
  setLocationsError,
} = projectsSlice.actions;

export default projectsSlice.reducer;
