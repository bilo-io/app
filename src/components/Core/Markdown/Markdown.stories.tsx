import React from 'react';
import type { Meta } from '@storybook/react';

import Markdown from './Markdown';
import Provider from '../../../../.storybook/Provider';
import { store } from '../../../store';

const withProvider = (story: Function): React.ReactElement => <Provider store={store}>{story()}</Provider>;

const meta: Meta<typeof Markdown> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },

  component: Markdown,

  decorators: [
    withProvider
  ],

  tags: ['autodocs'],
  title: 'Components/Core/Markdown'
};

export default meta;

const data = `
# Markdown Sample

## Emphasis

*This text* is italicized.

**This text** is bold.

***This text*** is both italicized and bold.

## Lists

## Links and Images

[Visit OpenAI](https://www.openai.com)

![OpenAI Logo](https://pbs.twimg.com/profile_images/1634058036934500352/b4F1eVpJ_400x400.jpg)

## Code

Inline code: \`const variable = "Hello, World!"\`

Code block:

\`\`\`javascript
function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
greet("John");

`;
export const DefaultStory = (): React.ReactElement => (
  <div className="overflow-hidden overflow-y-auto">
    <Markdown content={data} />
  </div>
);