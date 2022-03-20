import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import Checkbox2, { CheckboxProps } from './checkbox2';

export default {
  title: 'Components/Shared/Checkbox 2',
  component: Checkbox2,
  argTypes: {},
} as Meta;

const Template: Story<CheckboxProps> = (args) => {
	const { control } = useForm();
	return <Checkbox2 {...args} control={control} />;
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'Basic',
  label: 'Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Basic.args,
  color: 'secondary',
};

export const Default = Template.bind({});
Default.args = {
  ...Basic.args,
  color: 'default',
};
