import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReportIcon from '@material-ui/icons/Report';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import styles from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import Logout from '../views/Logout';
import Login from '../views/Login';
import Roles from '../views/Roles';
import {
  Nav
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
/*
var PageLinks = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },,
  {
    path: '/roles',
    name: 'Roles',
    component: Roles
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
]*/
const Sidebar = ({ classes }) => (
  <Drawer variant="permanent" classes={{ paper: classes.drawerPaper}}>
     
     <div className={classes.toolbar} />
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
  </Drawer>
);

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  routerHistory: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Sidebar);
