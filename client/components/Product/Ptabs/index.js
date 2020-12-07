import React from 'react';
import {
  Tabs,
  TabList,
  TabName,
} from './style';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';

// Icons imports
import ParamsIcon from '../../icons/params.icon';
import ComentsTabIcon from '../../icons/CommentsTab.icon';
import QuestionsTabIcon from '../../icons/QuestionsTab.icon';

// Import pages for each tab
import CommentsPage from './Comments';

export default function index({ productId }) {
  let { path, url } = useRouteMatch();
  return (
    <Tabs>
      <TabList>
        <TabName>
          <NavLink exact to={url}><ParamsIcon /> مشخصات</NavLink>
        </TabName>
        <TabName>
          <NavLink to={url + '/comments'}><ComentsTabIcon /> نظرات کاربران</NavLink>
        </TabName>
        <TabName>
          <NavLink to={url + '/questions'}><QuestionsTabIcon /> پرسش و پاسخ</NavLink>
        </TabName>
      </TabList>
      <Switch>
        <Route exact path={path}>
          <h3>مشخصات محصول اینجا نمایش داده شود</h3>
        </Route>
        <Route path={`${url}/comments`}>
          <CommentsPage productId={productId} />
        </Route>
        <Route path={`${url}/questions`}>
          قسمت پرسش و پاسخ
        </Route>
      </Switch>
    </Tabs>
  )
}
