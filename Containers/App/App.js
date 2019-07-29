import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SecureRoute from '../../Components/SecureRoute';
import ProtectedRoute from '../../Components/ProtectedRoute';
import { AuthProvider } from '../../Components/AuthContext';
import { UserProvider } from '../../Components/user-context';
import {PageLinks}from '../../Config/PageLinks';

const App = () => (
   <Fragment>
   
      <Router>
      <UserProvider>
       <Switch>
        {PageLinks.map(item => (
            <Route exact path={item.path} component={item.comp} />         
        ))}
          </Switch>
        </UserProvider>
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