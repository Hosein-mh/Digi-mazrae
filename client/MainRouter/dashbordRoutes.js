import React from 'react'
import { Switch, Route } from 'react-router-dom';
import DashbordMenu from '../core/DashbordMenu';
import CreateCategory from '../components/Category/CreateForm';

export default function dashbordRoutes() {
  return (
    <div>
      <DashbordMenu />
      <Switch>
        <Route path="/dashbord/categories" component={CreateCategory} />
        <Route exact path="/dashbord" render={() => 'dashbord'} />
      </Switch>
    </div>
  )
}
