import React from 'react';
import { Redirect } from 'react-router-dom';

export let Admin = ({ children }) => {
  let is_admin = localStorage.getItem('is_admin') || 'false';

  if (is_admin === 'false') {
    return <Redirect to="/" />;
  }
  return <>{children}</>;
};
