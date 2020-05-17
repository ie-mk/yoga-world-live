import React from 'react';
import FireBaseUILoginPage from '../../components/pages/login/FireBaseUILoginPage';
import { IS_SERVER } from '../constants';
import ErrorBoundary from '../../components/ErrorBoundary';

const Login = () => {
  return !IS_SERVER ? (
    <ErrorBoundary>
      <FireBaseUILoginPage />
    </ErrorBoundary>
  ) : null;
};

export default Login;
