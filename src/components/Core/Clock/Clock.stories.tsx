import React from 'react';
import type { Meta } from '@storybook/react';

import Clock from './Clock';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Clock> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Clock,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Clock'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <Clock />
);