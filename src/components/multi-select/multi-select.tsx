import React from 'react';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { FormLabel, FormControl, Theme, FormHelperText } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const RHFInputAny = RHFInput as any; // TODO: Clean up

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    marginTop: theme.spacing(1),
    color: theme.palette.error.main,
  },
}));

export interface MultiSelectProps {
  name: string;
  label?: string;
  register?: Function;
  setValue?: Function;
  errors?: any;
  fullWidth?: boolean;
  [x: string]: any;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  name,
  register,
  setValue,
  errors,
  options,
  fullWidth = true,
  disabled,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormControl variant="standard" fullWidth={fullWidth}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RHFInputAny
        as={<Select isMulti options={options} isDisabled={disabled} />}
        name={name}
        error={errors && errors[name] ? true : undefined}
        variant="outlined"
        margin="normal"
        register={register}
        setValue={setValue}
        {...rest}
      />

      {errors && errors[name] && <FormHelperText className={classes.errorText}>{errors[name].message}</FormHelperText>}
    </FormControl>
  );
};

export default MultiSelect;
