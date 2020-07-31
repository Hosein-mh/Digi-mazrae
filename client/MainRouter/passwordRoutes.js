import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom';
import PasswordReset from '../components/PasswordReset';
import ForgotPassword from '../components/PasswordReset/ForgotPassword';

export default function passwordRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/password/forgot" component={ForgotPassword} />
        <Route path="/password/reset/:userId/:token" component={PasswordReset} />
      </Switch>
    </div>
  )
}
