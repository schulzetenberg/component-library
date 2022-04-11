import React, { useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import EditableTable, { EditableTableProps } from './editable-table';

export default {
  title: 'Components/Shared/Editable Table',
  component: EditableTable,
  argTypes: {},
} as Meta;

const Template: Story<EditableTableProps> = (args) => {
  const { setValue, register } = useForm<FormData>();
  const [tempList, setTempList] = useState([
    { name: 'Test 1', value: '100' },
    { name: 'Test 2', value: '200' },
  ]);

  return (
    <EditableTable
      {...args}
      tableState={tempList}
      setTableState={setTempList}
      setValue={setValue}
      register={register}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: 'list',
  title: 'Assets',
  columns: [
    { title: 'Name', field: 'name' },
    { title: '$ Value', field: 'value', type: 'currency' },
  ],
};
