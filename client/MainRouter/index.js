import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GlobalStyle from '../style/GlobalStyle';
import CustomRoute from '../utils/customRoute.js';

//import other routes
import globalRoutes from './globalRoutes';
import passwordRoutes from './passwordRoutes';
import dashbordRoutes from './dashbordRoutes';
import { Container } from './style';

const MainRouter = () => {
  return (<Container>
      <GlobalStyle />
      <Switch>
        <Route path="/password" component={ passwordRoutes } />
        <Route path="/dashbord" component={ dashbordRoutes } />
        <Route path="/" component={ globalRoutes } />
      </Switch>
    </Container>)
}

export default MainRouter
