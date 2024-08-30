import { IProject } from '@vision/core';
import { AsyncData, AsyncDataHook, InitAsyncData } from 'models/store';
import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import {
  createProjectStoreAction,
  deleteProjectStoreAction,
  fetchProjectsStoreAction,
  setProject,
  setProjects,
  updateProjectStoreAction
} from './projectsSlice';

// @ts-ignore
const useApiProjects: () => AsyncDataHook<IProject> = (): {
  list: AsyncData<IProject[]>,
  item: AsyncData<IProject>,
  create: (args: { data: IProject }) => void,
  read: () => void,
  update: (args: { projectId?: string, data: IProject }) => void,
  delete: (args: { projectId?: string, id: string }) => void,
  clearItem?: () => void,
  clearList: () => void,
  setItem?: (data: IProject) => void
} => {
  const dispatch = useAppDispatch();

  // STORE
  const { list, item } = useAppSelector((state: RootState) => state.projects);

  // CRUD
  const dispatchCreate = (args: { data: IProject }) => dispatch(createProjectStoreAction(args));
  // const dispatchRead = () => dispatch(fetchProjectsAction())
  const dispatchRead = () => dispatch(fetchProjectsStoreAction());
  const dispatchUpdate = (args: { projectId?: string, data: IProject }) => dispatch(updateProjectStoreAction(args));
  const dispatchDelete = (args: { projectId?: string, id: string }) => dispatch(deleteProjectStoreAction(args));
  const dispatchSetItem = (data: IProject) => dispatch(setProject(data));

  // CLEANING
  const dispatchClearItem = (): {
    payload: IProject;
    type: string;
  } => dispatch(setProject(InitAsyncData<IProject>({} as IProject).data));
  const dispatchClearList = (): {
    payload: IProject[];
    type: string;
  } => dispatch(setProjects(InitAsyncData<IProject[]>([]).data));

  return {
    clearItem: dispatchClearItem,
    clearList: dispatchClearList,
    create: dispatchCreate,
    delete: dispatchDelete,
    item,
    list,
    read: dispatchRead,
    setItem: dispatchSetItem,
    update: dispatchUpdate,
  };
};

export default useApiProjects;