import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'
import { UserConsumer } from './user-context'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <UserConsumer>
    {({ isAuth }) => (
      <Route
        render={props =>
          isAuth ? <Component {...props} /> : <Redirect to="/" />
        }
        {...rest}
      />
    )}
  </UserConsumer>
)

export default ProtectedRoute
