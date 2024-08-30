import React from 'react';
import type { Meta } from '@storybook/react';

import ApiCall from './ApiCall';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof ApiCall> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: ApiCall,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/ApiCall'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <div>
    <ApiCall
      request={{
        method: 'GET',
        payload: null,
        url: '/api/characters'
      }}
      response={{
        data: {},
        status: 200
      }}
    />

    <ApiCall
      request={{
        method: 'POST',
        payload: {
          title: 'Vic'
        },
        url: '/api/characters'
      }}
      response={{
        data: {
          id: 1,
          title: 'Vic'
        },
        status: 200
      }}
    />

    <ApiCall
      request={{
        method: 'PUT',
        payload: {
          title: 'Vic'
        },
        url: '/api/characters/2'
      }}
      response={{
        data: {
          id: 1,
          title: 'Vic'
        },
        status: 200
      }}
    />

    <ApiCall
      request={{
        method: 'DELETE',
        payload: {
          title: 'Vic'
        },
        url: '/api/characters/2'
      }}
      response={{
        data: {
          id: 1,
          title: 'Vic'
        },
        error: {
          message: 'Server Error'
        },
        status: 200
      }}
    />

  </div>
);