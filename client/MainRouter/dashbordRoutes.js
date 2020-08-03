import React from 'react'
import { Switch, Route } from 'react-router-dom';
import DashbordMenu from '../core/DashbordMenu';

export default function dashbordRoutes() {
  return (
    <div>
      <DashbordMenu />
      <Switch>
        <Route path="/" render={() => 'dashbord'} />
        {/* <Route path="/users" component={} /> */}
      </Switch>
    </div>
  )
}
