import React from 'react'
import {Route, Switch} from 'react-router-dom';
import NotFounf from '../components/NotFound';
import GlobalStyle from '../style/GlobalStyle';

//import other routes
import globalRoutes from './globalRoutes';
import passwordRoutes from './passwordRoutes';
import dashbordRoutes from './dashbordRoutes';

const MainRouter = () => {
  return (<div>
      <GlobalStyle />
      <Switch>
        <Route path="/password" component={ passwordRoutes } />
        <Route path="/dashbord" component={ dashbordRoutes } />
        <Route path="/" component={ globalRoutes } />
        <Route path="*">
          <NotFounf />
        </Route>
      </Switch>
    </div>)
}

export default MainRouter
