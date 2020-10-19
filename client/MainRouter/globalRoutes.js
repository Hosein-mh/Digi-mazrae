import React, { Fragment } from 'react'
import Home from '../core/Home';
import Menu from '../core/Menu';
import Login from '../components/user/Login';
import NotFounf from '../components/NotFound';
import { Switch, Route } from 'react-router-dom';
import Category from '../components/Category';
import Cart from '../components/Cart';
import Product from '../components/Product';

export default function globalRoutes() {
  return (
    <Fragment>
      <Menu/>
      <Switch>
        <Route path="/signin" component={() => <Login fired={true} />} />
        <Route path="/categories/:categoryId" component={Category} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/" component={Home}/>
        <Route path="/*">
          <NotFounf />
        </Route>
      </Switch>
      <div style={{width: '100%', textAlign: 'center'}}>Footer</div>
    </Fragment>
  )
}
