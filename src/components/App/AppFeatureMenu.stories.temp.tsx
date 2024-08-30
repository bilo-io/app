import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { store } from '../../store';

import AppFeatureMenu from './AppFeatureMenu';
import Provider from '../../../.storybook/Provider';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof AppFeatureMenu> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: AppFeatureMenu,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/App/AppFeatureMenu'
};

export default meta;

export const DefaultStory = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      <AppFeatureMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};