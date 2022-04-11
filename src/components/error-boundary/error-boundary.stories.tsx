import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import ErrorBoundary, { ErrorBoundaryProps } from './error-boundary';

export default {
  title: 'Components/Shared/Error Boundary',
  component: ErrorBoundary,
} as Meta;

const Template: Story<ErrorBoundaryProps> = (args) => <ErrorBoundary {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  testMode: true,
};
