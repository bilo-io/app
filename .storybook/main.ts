import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "addon-redux"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
// export default config;

export default {
  ...config,
  webpackFinal: async (storybookConfig) => {
    storybookConfig.resolve.modules = [
      ...(storybookConfig.resolve.modules || []),
      'node_modules',
      path.resolve(__dirname, "../src"),
    ];

    if (!storybookConfig.resolve) {
      storybookConfig.resolve = {};
    }

    storybookConfig.resolve.plugins = [
      ...(storybookConfig.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];


    return storybookConfig;
  },
};
