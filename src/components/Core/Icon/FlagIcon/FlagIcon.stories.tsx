import React from 'react';
import type { Meta } from '@storybook/react';

import { Country, countries } from './countries';
import FlagIcon from './FlagIcon';
import Provider from '../../../../../.storybook/Provider';
import { store } from '../../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof FlagIcon> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: FlagIcon,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Icon/FlagIcon'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <div className="flex flex-row flex-wrap">
    {
      countries?.map((country: Country) => (
        <FlagIcon key={country.alpha2} alpha2={country.alpha2} size={28} />
      ))
    }
  </div>
);

