import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import makeStyles from '@mui/styles/makeStyles';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Box, Snackbar, SnackbarContent } from '@mui/material';

import { SessionContext } from '../../util/session-context';
import Request from '../../util/request';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    flexWrap: 'wrap',
  },
  fillSpace: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  snackbar: {
    marginTop: theme.spacing(8),
  },
  snackbarContent: {
    color: theme.palette.error.main,
  },
}));

const Header: React.FC<{ forceLoggedIn?: boolean }> = ({ forceLoggedIn = false }) => {
  const classes = useStyles();
  const history = useHistory();
  const { session, setSession }: any = React.useContext(SessionContext);
  const [isLoading, setLoading] = useState(false);
  const [logoutErrors, setLogoutErrors] = useState<string[]>([]);
  const isLoggedIn = (!!session && session.email) || forceLoggedIn;

  const handleLogout = async () => {
    setLogoutErrors([]);
    setLoading(true);

    try {
      await Request.post({ url: '/logout' });
      setSession();
      history.push('/sign-in');
    } catch (e: any) {
      setLoading(false);
      setLogoutErrors(e);
    }
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Snackbar
        autoHideDuration={5000}
        className={classes.snackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={logoutErrors.length > 0}
        onClose={(): void => {
          setLogoutErrors([]);
        }}
      >
        <SnackbarContent
          className={classes.snackbarContent}
          message={
            <>
              {logoutErrors.map((error, index) => (
                <span key={index}>
                  {error} <br />
                </span>
              ))}
            </>
          }
        />
      </Snackbar>

      <Toolbar className={classes.toolbar}>
        <Link variant="button" component={RouterLink} to="/" color="textPrimary">
          <Typography variant="h6" color="inherit">
            Data Collector
          </Typography>
        </Link>
        <Box className={classes.fillSpace} />

        {isLoggedIn && (
          <nav>
            {/*
						<Link
							variant="button"
							component={RouterLink}
							to="/app-config"
							color="textPrimary"
							 className={classes.link
						>
              Settings
						</Link>
						*/}
            <Link variant="button" component={RouterLink} to="/account" color="textPrimary" className={classes.link}>
              Account
            </Link>
          </nav>
        )}

        {isLoggedIn && (
          <Button
            onClick={handleLogout}
            disabled={isLoading}
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Logout
          </Button>
        )}

        {!isLoggedIn && (
          <Button component={RouterLink} to="/sign-in" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
