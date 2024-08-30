import React from 'react';
import type { Meta } from '@storybook/react';

import NotFound from './NotFound';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;


const meta = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: NotFound,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Pages/NotFound'
} satisfies Meta<typeof NotFound>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const DefaultStory = (): React.ReactElement => <NotFound />;