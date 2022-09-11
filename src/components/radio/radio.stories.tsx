import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import Radio, { RadioProps } from './radio';

export default {
  title: 'Components/Shared/Radio',
  component: Radio,
  decorators: [
    (StoryComponent): ReactElement => (
      <Grid item xs={12} sm={6}>
        <StoryComponent />
      </Grid>
    ),
  ],
  argTypes: {},
} as Meta;

const Template: Story<RadioProps> = (args) => {
  const { control } = useForm();
  return <Radio {...args} control={control} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: 'Label Value',
  name: 'radio1',
  errors: [],
  options: [
    { value: 'first', label: 'Option 1 Label' },
    { value: 'second', label: 'Option 2 Label' },
  ],
  disabled: false,
  isLoading: false,
};

export const IntegerOptions = Template.bind({});
IntegerOptions.args = {
  ...Basic.args,
  integerKeys: true,
  options: [
    { value: 1, label: 'Option 1 Label' },
    { value: 2, label: 'Option 2 Label' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Basic.args,
  errors: { radio1: { message: 'Error Message' } },
};

export const Required = Template.bind({});
Required.args = {
  ...Basic.args,
  label: 'Required',
  required: true,
};
