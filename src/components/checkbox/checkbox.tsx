import React from 'react';
import { RHFInput } from 'react-hook-form-input';
import makeStyles from '@mui/styles/makeStyles';
import { Checkbox as MaterialCheckbox, FormControlLabel } from '@mui/material';

const RHFInputAny = RHFInput as any; // TODO: Clean up

const useStyles = makeStyles(() => ({
  label: {
    userSelect: 'none',
  },
}));

export interface CheckboxProps {
  name: string;
  label?: string;
  register?: Function;
  setValue?: Function;
  errors?: any;
  fullWidth?: boolean;
  [x: string]: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, register, setValue, color = 'primary', errors, ...rest }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <RHFInputAny
          as={<MaterialCheckbox />}
          name={name}
          color={color}
          type="checkbox"
          error={errors[name] ? true : undefined}
          register={register}
          setValue={setValue}
          {...rest}
        />
      }
      className={classes.label}
      label={label}
    />
  );
};

export default Checkbox;
