import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

export interface EditableTableProps {
  tableState: any;
  setTableState: any;
  register: any;
  setValue: any;
  name: any;
  title: string;
  columns: any[];
}

const EditableTable: React.FC<EditableTableProps> = ({
  tableState,
  setTableState,
  register,
  setValue,
  name,
  title,
  columns,
}) => {
  useEffect(() => {
    register(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register]);

  return (
    <MaterialTable
      options={{
        search: false,
      }}
      editable={{
        onRowAdd: (newData): Promise<void> =>
          new Promise((resolve) => {
            const newList = [...tableState, newData];
            setValue(name, newList);
            setTableState(newList);
            resolve();
          }),
        onRowUpdate: (newData: any, oldData: any): Promise<void> =>
          new Promise((resolve) => {
            const changedItemIndex = tableState.findIndex((x: any) => x.tableData?.id === oldData.tableData?.id);

            const newList = [...tableState];
            newList[changedItemIndex].name = newData.name;
            newList[changedItemIndex].url = newData.url;

            setValue(name, newList);
            setTableState(newList);
            resolve();
          }),
        onRowDelete: (oldData: any): Promise<void> =>
          new Promise((resolve) => {
            const changedItemIndex = tableState.findIndex((x: any) => x.tableData?.id === oldData.tableData?.id);

            const newList = [...tableState];
            newList.splice(changedItemIndex, 1);

            setValue(name, newList);
            setTableState(newList);
            resolve();
          }),
      }}
      columns={columns}
      data={tableState}
      title={title}
    />
  );
};

export default EditableTable;
