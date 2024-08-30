import React from 'react';
import type { Meta } from '@storybook/react';

import { AppLogo } from './AppLogo';
import Provider from '../../../.storybook/Provider';
import { store } from '../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof AppLogo> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: AppLogo,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/App/AppLogo'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <AppLogo size={32} />
);