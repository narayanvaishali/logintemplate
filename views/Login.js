import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import { BrowserRouter as Router, Route,Switch, Redirect, withRouter } from 'react-router-dom'
//import { AuthConsumer } from '../Components/AuthContext';
import Layout from '../Layout';
import styles from './styles';
//import { UserConsumer } from '../Components/user-context';
//import { useForm } from "../Components/FormHook";
import { useFormContext } from "../Components/useFormContext";

const Login = () => {
  //const [state, setState] = useContext(useFormContext);
  /*return (
    <button onClick={() => setState(state => ({ ...state, name: 'Clicked!' }))}>
      {state.name}
    </button>
   )*/
function handleSubmit () {
  console.log ('handleSubmit');
}

function handleInputChange () {
  console.log ('handleInputChange');
}
     return (
       <form onSubmit={handleSubmit}>
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
                    onChange={handleInputChange}
                    required 
                    
                  />
                  <TextField
                    id="pwd"
                    label="pwd"
                    type="password"
                    name="pwd"
                    autoComplete="password"
                    margin="normal"
                    fullWidth
                    onChange={handleInputChange}
                    required 
                  />
                  <Button variant="outlined" color="secondary"  type="submit" >
                    Login
                  </Button>
          </div>
        </form>
      )
}
/*
const Login = ({history}) => {
const onLogin = () => {
    console.log(
      `User Created!   Email: ${inputs.email} ${inputs.pwd}`
    );
    history.push(`/dashboard`);
  };

const { inputs, handleInputChange, handleSubmit } = useForm(onLogin);

  return (
       <form onSubmit={handleSubmit}>
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
                    onChange={handleInputChange}
                    required 
                    
                  />
                  <TextField
                    id="pwd"
                    label="pwd"
                    type="password"
                    name="pwd"
                    autoComplete="password"
                    margin="normal"
                    fullWidth
                    onChange={handleInputChange}
                    required 
                  />
                  <Button variant="outlined" color="secondary"  type="submit" >
                    Login
                  </Button>
          </div>
        </form>
      )
}
*/
/*Login.propTypes = {
  email: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired,
}
*/
export default withRouter(Login);
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