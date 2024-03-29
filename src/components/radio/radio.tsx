import React from 'react';

import Radio from '@mui/material/Radio';
import { FormControl, FormHelperText, FormLabel, RadioGroup as MatRadioGroup, Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    color: theme.palette.error.main,
  },
}));

export interface RadioProps {
  control: any;
  name: any;
  label?: string;
  errors?: any;
  fullWidth?: boolean;
  disabled?: boolean;
  options: any;
  required?: boolean;
  integerKeys?: boolean;
  [x: string]: any;
}

const RadioGroup: React.FC<RadioProps> = ({
  control,
  name,
  label,
  errors,
  fullWidth = true,
  disabled = false,
  options,
  required = false,
  integerKeys = false,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }: { field: any }) => (
        <FormControl variant="standard" fullWidth={fullWidth}>
          <FormLabel id={name}>
            {label}
            {required ? '*' : ''}
          </FormLabel>
          <MatRadioGroup
            aria-labelledby={name}
            data-testid={name}
            {...field}
            {...rest}
            onChange={(e) =>
              integerKeys
                ? field.onChange(e.target.value ? parseInt(e.target.value, 10) : null)
                : field.onChange(e.target.value)
            }
          >
            {options.map((x: any) => (
              <FormControlLabel value={x.value} control={<Radio />} label={x.label} key={x.value} disabled={disabled} />
            ))}
          </MatRadioGroup>
          {!!errors?.[name] && <FormHelperText className={classes.errorText}>{errors[name].message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default RadioGroup;
