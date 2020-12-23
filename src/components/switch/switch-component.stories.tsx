import React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';

import SwitchComponent from './switch-component';

export default {
  title: 'Components/Shared/Switch Component',
  component: SwitchComponent,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <SwitchComponent {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  ...Basic.args,
  checked: true,
};
