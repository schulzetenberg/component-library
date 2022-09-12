import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import StoryRouter from 'storybook-react-router';

import theme from '../src/theme';

addDecorator((story) => <StyledEngineProvider injectFirst>
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
</StyledEngineProvider>);

addDecorator(StoryRouter());


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  // previewTabs: {
  // 	'storybook/docs/panel': {
  // 		hidden: true,
  // 	},
  // },
};
