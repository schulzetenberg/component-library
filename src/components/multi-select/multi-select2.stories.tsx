import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import MultiSelect2, { MultiSelectProps2 } from './multi-select2';

export default {
  title: 'Components/Shared/Multi Select 2',
  component: MultiSelect2,
  decorators: [
    (StoryComponent): ReactElement => (
      <Grid item xs={12} sm={6}>
        <StoryComponent />
      </Grid>
    ),
  ],
  argTypes: {},
} as Meta;

const Template: Story<MultiSelectProps2> = (args) => {
  const { control } = useForm();
  return <MultiSelect2 {...args} control={control} />;
};

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
