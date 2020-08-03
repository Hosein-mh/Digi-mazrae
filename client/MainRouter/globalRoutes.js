import React, { Fragment } from 'react'
import Home from '../core/Home';
import Menu from '../core/Menu';
import Login from '../components/user/Login';
import { Switch, Route } from 'react-router-dom';

export default function globalRoutes() {
  return (
    <Fragment>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={() => <Login fired={true} />} />
      </Switch>
    </Fragment>
  )
}
