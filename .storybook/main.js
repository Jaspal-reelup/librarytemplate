const path = require('path');

/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // Exclude react-native from webpack bundling
    config.externals = {
      'react-native': true,
      'react-native-web': true,
    };

    // Add aliases
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons',
    };

    // Add rules for handling TypeScript and React Native
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules\/(?!(react-native-|@react-native|@expo|expo))/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: ['react-native-web']
        }
      }
    });

    // Add extensions
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      ...(config.resolve.extensions || [])
    ];

    return config;
  },
  typescript: {
    reactDocgen: false, // Disable react-docgen due to issues with RN types
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};

export default config;