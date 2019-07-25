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


class Login extends Component  {
render () {

    return(
        <div> Hello user </div>
    )
  }
}
export default withStyles(styles)(Login);