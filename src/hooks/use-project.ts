// import { } from 'react'

import { IProject } from '@vision/core';
import { RootState } from 'store';
import { useAppSelector } from 'store/hooks';

export const useProject = (): IProject | null => {
  const { data: project } = useAppSelector((state: RootState) => state.projects.item);

  return project;
};

export const useProjectId = (): string | number | undefined => {
  const { data: project } = useAppSelector((state: RootState) => state.projects.item);

  return project?.id;
};