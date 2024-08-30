import React from 'react';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { ActionMeta } from 'react-select';

import Dropdown from './Dropdown';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';


const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Dropdown> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Dropdown,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Dropdown'
};

export default meta;

const data = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Mango', value: 'mango' },
  { label: 'Nectarine', value: 'nectarine' },
  { label: 'Orange', value: 'orange' },
  { label: 'Pear', value: 'pear' },
  { label: 'Quince', value: 'quince' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Tangerine', value: 'tangerine' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Yuzu', value: 'yuzu' },
];

export const DefaultStory = (): React.ReactElement => {
  const [value, setValue] = useState<{ value: string, label: string }>(data[0]);

  return (
    <Dropdown
      options={data}
      value={value}
      onChange={(newValue: any, actionMeta: ActionMeta<any>): void => {
        setValue(newValue);
      }}
    />
  );
};