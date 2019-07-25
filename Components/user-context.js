import React, { createContext } from 'react';

const UserContext = createContext({
  email: '',
  pwd : '',
  isAuth : '',
  login_click: () => {},
  updateEmail : () => {},
  updatePwd : () => {},
  logout_click: () => {},
});

export class UserProvider extends React.Component {
  login_click = ()=> {
    console.log("login clik "+ this.state.email + " " +  this.state.pwd);
    this.setState({isAuth : true });
  };

  logout_click = ()=> {
    this.setState({ isAuth : false });
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