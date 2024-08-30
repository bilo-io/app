import React from 'react';
import type { Meta } from '@storybook/react';

import Landing from './Landing';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;


const meta = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Landing,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Pages/Landing'
} satisfies Meta<typeof Landing>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const DefaultStory = (): React.ReactElement => <Landing />;