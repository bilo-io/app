import React from 'react';
import type { Meta } from '@storybook/react';

import Button from './Button';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';
import { IColorVariant } from '../types';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Button> = {

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // variant: 'primary',
    // size: 'lg',
    children: <div>Hello</div>
  },


  // @ts-ignore
  component: Button,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Button'
};

export default meta;

export const DefaultStory = (): React.ReactElement => {
  const data: string[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'error'
  ];

  return (
    <div className='flex flex-row'>
      {data.map((variant: string) => (
        <Button key={variant} variant={variant as IColorVariant} className='mr-2 mb-2'>
          <div>{variant}</div>
        </Button>
      ))}
    </div>
  );
};