import React from 'react';
import type { Meta } from '@storybook/react';
import { useState } from 'react';

import { SplitView } from './SplitView';
import Provider from '../../../.storybook/Provider';
import { store } from '../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof SplitView> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: SplitView,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/App/SplitView'
};

export default meta;

export const DefaultStory = (): React.ReactElement => {
  const [isShowingControls, setIsShowingControls] = useState<boolean>(false);

  return (
    <div className=''>
      <SplitView
        slice='tenants'
        exploreView={<div>
          <h1>Explore View</h1>
        </div>}
        contentView={<div>
          <h1>Content View</h1>
        </div>}
        controlView={<div>
          <h1>Control View</h1>
        </div>}
        emptyView={<div>Empty View
          <button onClick={() => setIsShowingControls(true)}>Click to see content</button>
        </div>}
        isShowingControls={isShowingControls}
      />
    </div>
  );
};