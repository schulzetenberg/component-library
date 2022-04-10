import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Switch as MaterialSwitch, FormControlLabel } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: 'none',
        },
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[300]}`,
      backgroundColor: theme.palette.grey[300],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SwitchForm2: React.FC<any> = ({ control, name, label, errors, fullWidth, ...rest }: any) => {
  const classes = useStyles();

  return (
		<Controller
			name={name}
			control={control}
			defaultValue={false}
			render={({ field }: { field: any }) =>
				<FormControlLabel
					label={label}
					labelPlacement="top"
					error={errors?.[name]}
					{...field}
					{...rest}
					control={
						<MaterialSwitch
							checked={field.value}
							focusVisibleClassName={classes.focusVisible}
							disableRipple
							classes={{
								root: classes.root,
								switchBase: classes.switchBase,
								thumb: classes.thumb,
								track: classes.track,
								checked: classes.checked,
							}}
						/>
					}
				/>
			}
		/>
  );
};

export default SwitchForm2;
