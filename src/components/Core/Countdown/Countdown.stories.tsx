import React from 'react';
import type { Meta } from '@storybook/react';

import Countdown from './Countdown';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Countdown> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Countdown,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Countdown'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <Countdown date={new Date(2028, 4, 1)} />
);