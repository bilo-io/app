import { ICharacter, IControls, IDialogue, IDocument, IGraph, ILocation, IProject } from '@vision/core';

import useApiCharacters from 'features/characters/useApiCharacters';
import useApiControls from 'features/controls/useApiControls';
import useApiDocuments from 'features/documents/useApiDocuments';
import useApiDialogues from 'features/dialogues/useApiDialogues';
import useApiGraphs from 'features/graphs/useApiGraphs';
import useApiLocations from 'features/locations/useApiLocations';
import useApiProjects from 'features/projects/useApiProjects';

import { AsyncDataHook } from 'models/store';

export const useApiAdmin: () => {
    projects: AsyncDataHook<IProject>,
    controls: AsyncDataHook<IControls>,
    characters: AsyncDataHook<ICharacter>,
    dialogues: AsyncDataHook<IDialogue>,
    documents: AsyncDataHook<IDocument>,
    locations: AsyncDataHook<ILocation>,
    graphs: AsyncDataHook<IGraph>,
} = (): {
    projects: AsyncDataHook<IProject>,
    controls: AsyncDataHook<IControls>,
    characters: AsyncDataHook<ICharacter>,
    dialogues: AsyncDataHook<IDialogue>,
    documents: AsyncDataHook<IDocument>,
    locations: AsyncDataHook<ILocation>,
    graphs: AsyncDataHook<IGraph>,
} => {
  // STORE
  const projects = useApiProjects();
  const controls = useApiControls();
  const characters = useApiCharacters();
  const dialogues = useApiDialogues();
  const documents = useApiDocuments();
  const locations = useApiLocations();
  const graphs = useApiGraphs();

  return {
    characters,
    controls,
    dialogues,
    documents,
    graphs,
    locations,
    projects,
  };
};