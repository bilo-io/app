import React from 'react';
import type { Meta } from '@storybook/react';

import Async from './Async';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Async> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Async,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Async'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <Async margin={''}>
    <div>Content</div>
  </Async>
);