import React from 'react';
import type { Meta } from '@storybook/react';

import BackButton from './BackButton';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof BackButton> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: BackButton,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/BackButton'
};

export default meta;

export const DefaultStory = (): React.ReactElement => <BackButton />;