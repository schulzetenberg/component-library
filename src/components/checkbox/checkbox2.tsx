import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Checkbox as MaterialCheckbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles(() => ({
  label: {
    userSelect: 'none',
  },
}));

export interface CheckboxProps2 {
  control: any;
  name: any;
  errors?: any;
  label?: string;
  fullWidth?: boolean;
  [x: string]: any;
}

const Checkbox2: React.FC<CheckboxProps2> = ({ control, name, label, errors, color = 'primary', ...rest }) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field }: { field: any }) => (
        <FormControlLabel
          className={classes.label}
          label={label}
          {...field}
          {...rest}
          control={<MaterialCheckbox color={color} />}
        />
      )}
    />
  );
};

export default Checkbox2;
