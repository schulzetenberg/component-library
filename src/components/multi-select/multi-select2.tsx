import React from 'react';

import Select from 'react-select';
import { InputLabel, FormControl, Theme, makeStyles, useTheme, FormHelperText } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) => ({
  errorText: {
    marginTop: theme.spacing(1),
    color: theme.palette.error.main,
  },
}));

export interface MultiSelectProps2 {
  name: string;
  label?: string;
  control: any;
  errors?: any;
  fullWidth?: boolean;
  [x: string]: any;
}

const MultiSelect2: React.FC<MultiSelectProps> = ({
  label,
  name,
  control,
  errors,
  options,
  fullWidth = true,
  disabled,
  ...rest
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
		<Controller
			name={name}
			control={control}
			defaultValue=''
			render={({ field }: { field: any }) =>
				<FormControl fullWidth={fullWidth}>
					{/* TOO: Label is not showing up correctly */}
					<InputLabel htmlFor={name}>{label}</InputLabel>
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

					{!!errors?.[name] &&
						<FormHelperText className={classes.errorText}>
							{errors[name].message}
						</FormHelperText>
					}
				</FormControl>
			}
		/>
  );
};

export default MultiSelect2;
