import React, { useState } from 'react';

const UserContext = React.createContext([{}, () => {}]);

const UserContextProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext, UserContextProvider };

/*import React, { createContext } from 'react';
//import history from 'browser-history';
import { browserHistory } from 'react-router';

*const UserContext = createContext({
  email: '',
  pwd : '',
  isAuth : '',
  message : '',
  login_click: () => {},
  updateEmail : () => {},
  updatePwd : () => {},
  logout_click: () => {},
});

export class UserProvider extends React.Component {
  constructor(props){
    super(props);
  }
     
  login_click = (e, history)=> {
   // console.log(history);
    console.log("login clik "+ this.state.email + " " +  this.state.pwd);
   if (this.state.email != '' && this.state.email != ''){
    this.setState({isAuth : true });
    history.push(`/dashboard`);
   }
  };

  logout_click = ()=> {
    this.setState({ isAuth : false });
    history.replace(`/`);
  };

 updateEmail = (newemail )=> {
    this.setState({ email: newemail});
  };

   updatePwd = (newpwd )=> {
    this.setState({ pwd : newpwd});
  };

  state = {
    email: 'email',
    pwd : 'pwd',
    login_click: this.login_click,
    updateEmail: this.updateEmail,
    updatePwd: this.updatePwd,
    logout_click : this.logout_click
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export const UserConsumer = UserContext.Consumer;
*/