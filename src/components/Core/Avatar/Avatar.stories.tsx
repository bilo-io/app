import React from 'react';
import type { Meta } from '@storybook/react';

import Avatar from './Avatar';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Avatar> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Avatar,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Avatar'
};

export default meta;

const data = [
  'https://t4.ftcdn.net/jpg/02/60/03/61/360_F_260036118_AUYppgsODQeTCnbu0OXGNDXB8EVzpxKq.jpg',
  'https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?size=626&ext=jpg&ga=GA1.2.1190125156.1706518123&semt=ais',
  'https://img.freepik.com/free-photo/happy-african-american-young-man-colorful-shirt-wearing-glasses-looking-camera-smiling-cheerfully_141793-108881.jpg?w=996&t=st=1706518186~exp=1706518786~hmac=46963cd3eebe8a10d20f4f80899f89d36cea8a2d7f679e12165b620bfae95ae6',
  'https://img.freepik.com/premium-photo/man-face-avatar-portrait-confident-expression-icon-handsome-young-beardy-guy-isolated-light_279525-27178.jpg?w=996'
];

export const DefaultStory = (): React.ReactElement => (
  <div className="flex flex-row">
    {
      data.map((item: string, i: number) => (
        <div className="mr-2 mb-2" key={i}>
          <Avatar key={`${i}-${item}`} url={item} size={64} />
        </div>
      ))
    }
  </div>
);