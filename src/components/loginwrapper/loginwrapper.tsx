import React from 'react';
import { LoginPage } from '../login/page';

export const LoginWrapper = WrappedComponent => () => (
  <>
    <LoginPage />
    <WrappedComponent />
  </>
)
