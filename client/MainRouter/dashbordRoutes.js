import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Container } from './style';
import DashbordMenu from '../core/DashbordMenu';
import CategoriesList from '../components/Category/List';
import CategoryCreate from '../components/Category/CreateForm';

export default function dashbordRoutes() {
  return (
    <Container>
      <DashbordMenu />
      <Switch>
        <Route exact path="/dashbord/categories/create" component={CategoryCreate} />
        <Route path="/dashbord/categories" component={CategoriesList} />
        <Route exact path="/dashbord" render={() => 'dashbord'} />
      </Switch>
    </Container>
  )
}
