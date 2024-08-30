import React from 'react';
import type { Meta } from '@storybook/react';

import AuthLogin from './AuthLogin';
import Provider from '../../../.storybook/Provider';
import { store } from '../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;


const meta = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: AuthLogin,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Pages/Auth'
} satisfies Meta<typeof AuthLogin>;

export default meta;

// type Story = StoryObj<typeof meta>;

export const DefaultStory = (): React.ReactElement => <AuthLogin />;