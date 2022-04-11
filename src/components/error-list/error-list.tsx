import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  errorMessage: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  cardContent: {
    padding: 0,
  },
  icon: {
    margin: theme.spacing(1),
    color: theme.palette.common.white,
  },
  root: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  bullet: {
    marginRight: theme.spacing(1),
  },
}));

export interface ErrorListProps {
  errors: string[];
}

const ErrorList: React.FC<ErrorListProps> = ({ errors }) => {
  const classes = useStyles();

  if (!errors || errors.length < 1) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  const bullet = <>{errors.length !== 1 && <span className={classes.bullet}>•</span>}</>;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Box component="div" m={0} p={0} style={{ backgroundColor: 'red' }}>
          <ErrorOutlineIcon fontSize="large" className={classes.icon} />
        </Box>
        {errors.map((error: string, index: number) => (
          <Typography className={classes.errorMessage} key={index} variant="body1">
            {bullet} {error}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default ErrorList;
