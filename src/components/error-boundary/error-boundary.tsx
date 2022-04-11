import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

import ErrorList from '../error-list/error-list';

export interface ErrorBoundaryProps {
  children: ReactNode;
  testMode?: boolean;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  // eslint-disable-next-line react/state-in-constructor
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error', error, errorInfo);
  }

  public render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.hasError || this.props.testMode) {
      return (
        <Grid item xs={12}>
          <ErrorList errors={['Uh oh! An error has occured']} />
        </Grid>
      );
    }

    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}

export default ErrorBoundary;
