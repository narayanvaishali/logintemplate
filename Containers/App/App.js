import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SecureRoute from '../../Components/SecureRoute';
import ProtectedRoute from '../../Components/ProtectedRoute';
// Views
import Dashboard from '../../views/Dashboard';
import Logout from '../../views/Logout';
import Login from '../../views/Login';
import Roles from '../../views/Roles';
import { AuthProvider } from '../../Components/AuthContext';

var ThemeRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/views/roles',
    name: 'Roles',
    component: Roles
  },
  {
    path: '/views/logout',
    name: 'Logout',
    component: Logout
  },
]

const App = () => (
   <Fragment>
   
      <Router>
      <AuthProvider>
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/roles" component={Roles} />
        </AuthProvider>
      </Router>
    
  </Fragment>
);


export default App;

/*

<List>
              <ListItem
                button
                component={Link}
                to="/"
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </List>
            <List>
              <ListItem
                button
                component={Link}
                to="/roles"
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Roles" />
              </ListItem>
            </List>            
            <List>
              <ListItem
                button
                component={Link}
                to="/logout"
              >
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
            */