import React from 'react';
import type { Meta } from '@storybook/react';

import AudioPlayer from './AudioPlayer';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof AudioPlayer> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: AudioPlayer,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/AudioPlayer'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <AudioPlayer data={'https://github.com/bilo-io/vision-assets/raw/master/CDN/DEV/assets/audio/themesong-johnwick-wetwork.mp3'} />
);