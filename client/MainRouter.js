import React from 'react'
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Home from './core/Home';
import Menu from './core/Menu';
import Login from './components/user/Login';
import NotFounf from './components/NotFound';
import GlobalStyle from './style/GlobalStyle';

const MainRouter = () => {
  return (<div>
      <GlobalStyle />
      <Menu/>
      <Switch>
        <Route path="/signin" component={() => <Login fired={true} />} />
        <Route exact path="/" component={Home}/>
        <Route path="/gooz">
          <NotFounf />
        </Route>
      </Switch>
    </div>)
}

export default MainRouter
