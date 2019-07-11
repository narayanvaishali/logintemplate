import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SecureRoute from '../../Components/SecureRoute';
// Views
import Dashboard from '../../views/Dashboard';
import Logout from '../../views/Logout';
import Login from '../../views/Login';
import Roles from '../../views/Roles';


const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
      <SecureRoute exact path="/" component={Dashboard} />
      <SecureRoute exact path="/roles" component={Roles} />
    </Fragment>
  </Router>
);


export default App;