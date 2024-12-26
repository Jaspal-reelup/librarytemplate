/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ["../components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
  framework: '@storybook/react-native-web-vite',
};
// export default {
//   addons: [
//     '@storybook/addon-react-native-web', // 👈 Remove the addon
//   ],
//   // Replace @storybook/react-webpack5 with the Vite framework
//   framework: '@storybook/react-native-web-vite',
// };