import React from 'react'
import {Route, Switch} from 'react-router-dom';
import NotFounf from '../components/NotFound';
import GlobalStyle from '../style/GlobalStyle';
import { useSelector } from 'react-redux';
import CustomRoute from '../utils/customRoute.js';

//import other routes
import globalRoutes from './globalRoutes';
import passwordRoutes from './passwordRoutes';
import dashbordRoutes from './dashbordRoutes';
import { Container } from './style';

const MainRouter = () => {
  const user = useSelector(state => state.user.data);
  return (<Container>
      <GlobalStyle />
      <Switch>
        <Route path="/password" component={ passwordRoutes } />
        <CustomRoute
          path="/dashbord"
          component={ dashbordRoutes }
          requireAdmin
          user={user}
        />
        <Route path="/" component={ globalRoutes } />
        <Route path="*">
          <NotFounf />
        </Route>
      </Switch>
    </Container>)
}

export default MainRouter
