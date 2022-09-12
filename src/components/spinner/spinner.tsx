import React from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { Theme } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

export interface SpinnerProps {
  isPage?: boolean;
  [x: string]: any;
}
const Spinner: React.FC<SpinnerProps> = ({ isPage = false, ...rest }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      page: {
        marginTop: theme.spacing(3),
      },
    })
  );

  const classes = useStyles();
  const pageProps = isPage ? { size: 60 } : null;

  return (
    <Grid container justifyContent="center">
      <CircularProgress className={isPage ? classes.page : ''} {...pageProps} {...rest} />
    </Grid>
  );
};

export default Spinner;
