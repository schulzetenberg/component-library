import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import TextField2 from './text-field2';

export default {
  title: 'Components/Shared/Text Field 2',
  component: TextField2,
  argTypes: {},
} as Meta;

const Template: Story = (args: any) => {
	const { control } = useForm();
	return <TextField2 {...args} control={control} />;
};

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
