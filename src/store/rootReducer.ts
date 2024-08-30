import { CombinedState, combineReducers } from '@reduxjs/toolkit';
// NOTE: please make sure these are sorted alphabetically
// this is to ensure alignment with the folder structure

// reducers
import appReducer from 'features/app/appSlice';
import blueprintsReducer from 'features/blueprints/blueprintsSlice';
import charactersReducer from 'features/characters/charactersSlice';
import projectsReducer from 'features/documents/documentsSlice';
import generatorsReducer from 'features/generators/generatorsSlice';
import usersReducer from 'features/user/userSlice';


const combinedReducer = combineReducers({
  app: appReducer,
  blueprints: blueprintsReducer,
  characters: charactersReducer,
  generators: generatorsReducer,
  projects: projectsReducer,
  users: usersReducer,
});

const resetExclusions = ['auth'];

/**
 * This completely resets the redux store e.g when logging out
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: any): CombinedState<any> => {
  if (action.type === 'RESET') {
    // eslint-disable-next-line no-param-reassign
    const newState: { [key: string]: any } = {};

    Object.keys(state).forEach(x => {
      if (resetExclusions.includes(x)) newState[x] = state[x];
    });

    state = newState;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
