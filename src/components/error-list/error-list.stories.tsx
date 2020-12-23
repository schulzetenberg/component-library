import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid } from '@material-ui/core';

import ErrorList, { ErrorListProps } from './error-list';

export default {
  title: 'Components/Shared/Error List',
  component: ErrorList,
  decorators: [
    (StoryComponent): ReactElement => (
      <Grid item xs={12} sm={6}>
        <StoryComponent />
      </Grid>
    ),
  ],
} as Meta;

const Template: Story<ErrorListProps> = (args) => <ErrorList {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  errors: ['Server Error'],
};

export const MultipleErrors = Template.bind({});
MultipleErrors.args = {
  errors: ['Server Error: Timeout', 'Could Not Find Account With Username FakeUser123', 'Error 3'],
};
