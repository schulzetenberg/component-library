import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import SwitchForm2 from './switch-form2';

export default {
  title: 'Components/Shared/Switch Form 2',
  component: SwitchForm2,
  argTypes: {},
} as Meta;

const Template: Story = (args) => {
	const { control } = useForm();
	return <SwitchForm2 {...args} control={control} />;
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Switch 1',
  label: 'Switch Label',
  errors: [],
  fullWidth: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Basic.args,
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  checked: true,
  disabled: true,
};
