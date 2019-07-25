import React, { createContext } from 'react';

const UserContext = createContext({
  email: '',
  pwd : '',
  isAuth : '',
  login_click: () => {},
  updateEmail : () => {},
  updatePwd : () => {},
  //logout_click: () => {},
});

export class UserProvider extends React.Component {
  login_click = (newemail, newpwd, isAuth )=> {
    this.setState({ email: newemail, pwd : newpwd, isAuth : true });
  };

  logout_click = (newemail, newpwd, isAuth )=> {
    this.setState({ email: newemail, pwd : newpwd, isAuth : false });
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

    //logout_click : logout_click
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