import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { AppProvider } from './Containers/App';
//import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter  } from 'react-router-dom';
// import AppRoutes from './components/AppRoutes';
//import SideBar from './Layout/Sidebar';
import theme from './theme';

ReactDOM.render(
  <AppProvider theme={theme}>
    <App />
</AppProvider>, document.getElementById('root'));

/*ReactDOM.render(
 <MuiThemeProvider>
   <BrowserRouter>
      <SideBar />
   </BrowserRouter>
</MuiThemeProvider>,
  document.getElementById('root'));*/
//registerServiceWorker();
