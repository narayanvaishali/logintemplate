import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

import Dashboard from '../views/Dashboard';
import Logout from '../views/Logout';
import Login from '../views/Login';
import Roles from '../views/Roles';

export const PageLinks = [
  {
    path: '/',
    name: 'Dashboard',
    //icon : InboxIcon,
    comp: Dashboard
  },
  {
    path: '/roles',
    name: 'Roles',
   // icon : StarIcon,
    comp: Roles
  },
  {
    path: '/logout',
    name: 'Logout',
   // icon : SendIcon,
    comp: Logout
  },
];
