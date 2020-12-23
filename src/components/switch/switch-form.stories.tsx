import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import SwitchForm from './switch-form';

export default {
  title: 'Components/Shared/Switch Form',
  component: SwitchForm,
  argTypes: {
    register: { action: 'register' },
    setValue: { action: 'set value' },
  },
} as Meta;

const Template: Story = (args) => <SwitchForm {...args} />;

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
