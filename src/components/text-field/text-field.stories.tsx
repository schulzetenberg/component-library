import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import TextField from './text-field';

export default {
  title: 'Components/Shared/Text Field',
  component: TextField,
  argTypes: {
    register: { action: 'register' },
    setValue: { action: 'set value' },
  },
} as Meta;

const Template: Story = (args: any) => <TextField {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'Field 1',
  errors: [],
  fullWidth: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true,
};

export const Labeled = Template.bind({});
Labeled.args = {
  ...Basic.args,
  label: 'Labeled',
};

export const Required = Template.bind({});
Required.args = {
  ...Basic.args,
	label: 'Required',
  required: true,
};

export const TextArea = Template.bind({});
TextArea.args = {
  ...Basic.args,
  multiline: true,
	fullWidth: true,
};
