import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid } from '@mui/material';

import MultiSelect, { MultiSelectProps } from './multi-select';

export default {
  title: 'Components/Shared/Multi Select',
  component: MultiSelect,
  decorators: [
    (StoryComponent): ReactElement => (
      <Grid item xs={12} sm={6}>
        <StoryComponent />
      </Grid>
    ),
  ],
  argTypes: {
    register: { action: 'register' },
    setValue: { action: 'set value' },
  },
} as Meta;

const Template: Story<MultiSelectProps> = (args) => <MultiSelect {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label Value',
  name: 'multiSelect',
  errors: [],
  options: [
    { value: 'Option 1', label: 'Option 1 Label' },
    { value: 'Option 2', label: 'Option 2 Label' },
  ],
  disabled: false,
  isLoading: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Basic.args,
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Basic.args,
  errors: { multiSelect: { message: 'Error Message' } },
};
