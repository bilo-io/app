import React from 'react';
import type { Meta } from '@storybook/react';

import { AppIcon } from './AppIcon';
import Provider from '../../../.storybook/Provider';
import { store } from '../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof AppIcon> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
  component: AppIcon,
  decorators: [
    withProvider
  ],
  tags: ['autodocs'],
  title: 'Components/App/AppIcon',
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <AppIcon size={32} />
);