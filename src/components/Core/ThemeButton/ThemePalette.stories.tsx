import React from 'react';
import type { Meta } from '@storybook/react';
import { ThemeName } from 'hooks';
import { themeNames } from 'styles/themes';

import ThemePalette from './ThemePalette';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';


const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof ThemePalette> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: ThemePalette,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/ThemePalette'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <div className="flex flex-row flex-wrap">
    {
      themeNames?.map((themeName: ThemeName) => (
        <ThemePalette key={themeName} size={128} themeName={themeName} />
      ))
    }
  </div>
);

