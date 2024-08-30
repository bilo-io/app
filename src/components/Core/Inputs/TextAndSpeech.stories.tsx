import React from 'react';
import type { Meta } from '@storybook/react';
import { useState } from 'react';

import TextAndSpeech from './TextAndSpeech';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof TextAndSpeech> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: TextAndSpeech,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/TextAndSpeech'
};

export default meta;

export const DefaultStory = (): React.ReactElement => {
  const [text, setText] = useState<string>('');

  return (
    <TextAndSpeech
      element={'input'}
      value={text}
      onChangeText={(result: string) => setText(result)}
      onChangeRecording={() => { }}
    />
  );
};