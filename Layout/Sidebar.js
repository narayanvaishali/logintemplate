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
import {
  AppBar, Toolbar, IconButton, Typography, Hidden,
  Drawer, CssBaseline, MenuList, MenuItem
} from '@material-ui/core'

import Dashboard from '../views/Dashboard';
import Logout from '../views/Logout';
import Login from '../views/Login';
import Roles from '../views/Roles';

var PageLinks = [
  {
    path: '/',
    name: 'Dashboard',
    icon : InboxIcon,
    comp: Dashboard
  },
  {
    path: '/roles',
    name: 'Roles',
    icon : StarIcon,
    comp: Roles
  },
  {
    path: '/logout',
    name: 'Logout',
    icon : SendIcon,
    comp: Logout
  },
]

const ItemIcon = (icon) => (
   <ListItemIcon>{icon.icon}</ListItemIcon>
);

const Sidebar = ({ classes }) => (
  <Drawer variant="permanent" classes={{ paper: classes.drawerPaper}}>
     
     <div className={classes.toolbar} />
          {PageLinks.map(item => (
            <List>
              <ListItem                
                component={Link}
                to={item.path}
              >
           
                <ListItemText primary={item.name} />
              </ListItem>
            </List>
        ))}
    </Drawer>
);

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  //routerHistory: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Sidebar);
