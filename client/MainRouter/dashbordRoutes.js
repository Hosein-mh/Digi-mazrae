import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './style';
import DashbordMenu from '../core/DashbordMenu';
import CategoriesList from '../components/Category/List';
import CategoryCreate from '../components/Category/CreateForm';
import CategoryEdit from '../components/Category/EditForm';

export default function dashbordRoutes() {
  const user = useSelector(state => state.user.data);
  useEffect(() => {
  }, [user]);
  return (
    <Container>
      {
        user && !user.admin &&
        <Redirect to="/" />
      }
      <DashbordMenu />
      <Switch>
        <Route exact path="/dashbord/categories/create" component={CategoryCreate} />
        <Route exact path="/dashbord/categories/edit/:categoryId" component={CategoryEdit} />
        <Route path="/dashbord/categories" component={CategoriesList} />
        <Route exact path="/dashbord" render={() => 'dashbord'} />
      </Switch>
    </Container>
  )
}
