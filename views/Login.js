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
           <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  fullWidth
                onChange={event => {
                  updateEmail(event.target.value);
                }}
                />
                <TextField
                  id="pwd"
                  label="pwd"
                  type="password"
                  name="pwd"
                  autoComplete="password"
                  margin="normal"
                  fullWidth
                  onChange={event => {
                    updatePwd(event.target.value);
                  }}
                />
                <Button variant="outlined" color="secondary"  type="submit" onClick={login_click}>
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