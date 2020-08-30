import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * prevents rendering of specified component without user being logged in
 * @param {Component} Component
 */
const withAuth = (Component) => (props) => {
  if (props.isLoggedIn) {
    return <Component {...props} />;
  } else {
    return <Redirect to='/login' />;
  }
};

export default withAuth;
