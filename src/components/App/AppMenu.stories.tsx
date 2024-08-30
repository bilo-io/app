import React from 'react';
import type { Meta } from '@storybook/react';

import AppMenu from './AppMenu';
import Provider from '../../../.storybook/Provider';
import { store } from '../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof AppMenu> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: AppMenu,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/App/AppMenu'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <AppMenu isOpen={false} onToggle={() => { }} />
);