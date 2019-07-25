import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
import { AuthConsumer } from '../Components/AuthContext';
import Layout from '../Layout';
import styles from './styles';
import { UserConsumer } from '../Components/user-context';

export default function Login() {
  return (
    <UserConsumer>
      {({ email, pwd, isAuth, updateEmail, updatePwd, login_click }) => (
        <div>
          <h2>Login</h2>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            onChange={event => {
              updateEmail(event.target.value);
            }}
           />
          <label htmlFor="pwd">Password: </label>
          <input
            id="pwd"
            type="password"
            onChange={event => {
              updatePwd(event.target.value);
            }}
          />
           <Button variant="outlined" color="secondary"  type="submit"  onClick={login_click}>
                  Login
                </Button>
        </div>
      )}
    </UserConsumer>
  );
}

/*
class Login extends Component  {
render () {

    return(
        <div> Hello user </div>
    )
  }
}
export default withStyles(styles)(Login);
*/