import React from 'react';

import ReactSelect from 'react-select';
import { FormControl, Theme, FormHelperText, FormLabel } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    marginTop: theme.spacing(1),
    color: theme.palette.error.main,
  },
}));

export interface SelectProps {
  name: any;
  label?: string;
  control: any;
  errors?: any;
  fullWidth?: boolean;
  [x: string]: any;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  control,
  errors,
  options,
  fullWidth = true,
  disabled = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }: { field: any }) => (
        <FormControl variant="standard" fullWidth={fullWidth}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <ReactSelect
            options={options}
            isDisabled={disabled}
            error={errors && errors[name] ? true : undefined}
            variant="outlined"
            margin="normal"
            {...field}
            {...rest}
          />

          {!!errors?.[name] && <FormHelperText className={classes.errorText}>{errors[name].message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default Select;
