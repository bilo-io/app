import React from 'react';
import type { Meta } from '@storybook/react';

import Accordion from './Accordion';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Accordion> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Accordion,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Accordion'
};

export default meta;

export const DefaultStory = (): React.ReactElement => <Accordion />;