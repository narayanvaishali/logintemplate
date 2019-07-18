import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { auth } from '../db/auth';

const SecureRoute = ({ component: Component, ...rest }) => {
 // const user = auth().currentUser;
  const user = "Admin";
  return (
    <Route
      {...rest}
      render={
        props => (user ? (<Component {...props} />) : (<Redirect to="/login" />))
      }
    />
  );
};

/*SecureRoute.propTypes = {
  component: PropTypes.func.isRequired,
};*/

export default SecureRoute;
