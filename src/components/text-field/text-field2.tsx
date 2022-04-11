import React from 'react';

import { TextField as MaterialTextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const TextField2: React.FC<{
  control: any;
  name: any;
  errors?: any;
  [x: string]: any;
}> = ({ control, name, errors, type, ...rest }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }: { field: any }) => (
        <MaterialTextField
          rows={12}
          error={!!errors?.[name]}
          variant="outlined"
          margin="normal"
          InputProps={{ type }}
          helperText={errors?.[name]?.message}
          data-testid={name}
          {...field}
          {...rest}
        />
      )}
    />
  );
};

export default TextField2;
