import React, { createContext } from 'react';

const UserContext = createContext({
  email: '',
  pwd : '',
  isAuth : '',
  login_click: () => {},
  logout_click: () => {},
});

export class UserProvider extends React.Component {
  login_click = (newemail, newpwd, isAuth )=> {
    this.setState({ email: newemail, pwd : newpwd, isAuth : isAuth });
  };

  logout_click = (newemail, newpwd, isAuth )=> {
    this.setState({ email: newemail, pwd : newpwd, isAuth : isAuth });
  };

  state = {
    email: 'email',
    pwd : 'pwd',
    login_click: this.login_click,
    logout_click : logout_click
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