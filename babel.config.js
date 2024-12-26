module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo', // Expo preset
      '@babel/preset-typescript' // Add TypeScript preset to handle JS and TS files
    ],
    plugins: [
      'react-native-reanimated/plugin', // Handle reanimated
      'react-native-web' // Ensure we handle react-native-web imports correctly
    ],
  };
};
