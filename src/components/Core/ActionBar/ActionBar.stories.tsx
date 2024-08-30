import React from 'react';
import type { Meta } from '@storybook/react';

import ActionBar from './ActionBar';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof ActionBar> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: ActionBar,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/ActionBar'
};

export default meta;

export const DefaultStory = (): React.ReactElement => <ActionBar sliceType={'characters'} />;