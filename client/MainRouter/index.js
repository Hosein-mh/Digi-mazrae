import React from 'react'
import {Route, Switch} from 'react-router-dom';
import CustomRoute from '../utils/customRoute';
import Home from '../core/Home';
import Menu from '../core/Menu';
import Login from '../components/user/Login';
import NotFounf from '../components/NotFound';
import GlobalStyle from '../style/GlobalStyle';
import passwordRoutes from './passwordRoutes';

const MainRouter = () => {
  return (<div>
      <GlobalStyle />
      <Menu/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={() => <Login fired={true} />} />
        <CustomRoute path="/admin" requireAdmin component={() => <div>Admin Pages</div>} />
        <Route path="/password" component={ passwordRoutes } />
        <Route path="*">
          <NotFounf />
        </Route>
      </Switch>
    </div>)
}

export default MainRouter
