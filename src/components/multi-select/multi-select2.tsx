import React from 'react';

import Select from 'react-select';
import { FormControl, Theme, makeStyles, FormHelperText, FormLabel } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    marginTop: theme.spacing(1),
    color: theme.palette.error.main,
  },
}));

export interface MultiSelectProps2 {
  name: any;
  label?: string;
  control: any;
  errors?: any;
  fullWidth?: boolean;
  [x: string]: any;
}

const MultiSelect2: React.FC<MultiSelectProps2> = ({
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
        <FormControl fullWidth={fullWidth}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Select
            isMulti
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

export default MultiSelect2;
