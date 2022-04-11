module.exports = {
	core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    'storybook-dark-mode/register',
  ],
};
