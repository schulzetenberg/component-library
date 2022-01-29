import React from 'react';
import { RHFInput } from 'react-hook-form-input';
import { TextField as MaterialTextField } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const RHFInputAny = RHFInput as any; // TODO: Clean up

const useStyles = makeStyles((theme: Theme) =>
  createStyles({}));


const TextField: React.FC<{
  name: string;
  register?: Function;
  setValue?: Function;
  errors?: any;
  [x: string]: any;
}> = ({ name, register, setValue, errors, type, ...rest }) => {
	const classes = useStyles();

  return (
    <RHFInputAny
      as={<MaterialTextField name={name} data-testid={name} />}
      name={name}
      error={errors && errors[name] ? true : undefined}
      defaultValue=""
      variant="outlined"
			rows={12}
      margin="normal"
      register={register}
      setValue={setValue}
      InputProps={{ type }}
      helperText={errors && errors[name] ? errors[name].message : undefined}
      {...rest}
    />
  );
};

export default TextField;
