import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => (props) => {
  if (props.isLoggedIn) {
    return <Component {...props} />;
  } else {
    return <Redirect to='/login' />;
  }
};

export default withAuth;
