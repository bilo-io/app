import React from 'react';
import type { Meta } from '@storybook/react';

import ContentRating from './ContentRating';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof ContentRating> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: ContentRating,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/ContentRating'
};

export default meta;

export const DefaultStory = (): React.ReactElement => (
  <ContentRating
    age={18}
    isRRated
    hasLanguage
    hasNudity
    hasSex
    hasViolence
    hasDrugUse={false}
    hasAlcoholUse={false}
    hasGambling={false}
    hasScaryElements={false}
    hasOnlineInteractions={false}
  />
);