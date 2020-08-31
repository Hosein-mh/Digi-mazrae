import React, { useState, useEffect } from 'react'
import { Root, Row } from './style';
import RootContainer from '../RootContainer';
import CategoryHeader from './CategoryHeader';
import { getCategory } from '../../utils/api-helpers/category';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import DescriptionSection from './DescriptionSection';
import CategorySelectSide from './CategorySelectionSide';
import Instagram from '../Instagram';
import ScrollToTop from '../ScrollToTop';

export default function index({ match }) {
  const [category, setCategory] = useState({
    photo: '/public/img/categories/almond.jpg-1597674348307.jpeg'
  });
  const { categoryId } = match.params;
  const { url, path } = useRouteMatch();

  // Fetch categoryInfo by match.parms
  const fetchCategory = async (categoryId) => {
    const fetchResp = await getCategory(categoryId);
    if (fetchResp.ok && fetchResp.status == 200) {
      setCategory(fetchResp.data.category);
    }
  }
  useEffect(() => {
    fetchCategory(categoryId);
  }, [categoryId])
  return (
    <Root>
      <Row id="firstRow">
        <Instagram />
        <CategoryHeader category={category} />
        <CategorySelectSide />
      </Row>
      <RootContainer>
        <Switch>
          <Route exact path={path}>
            <h3>show the store of category</h3>
          </Route>
          <Route path={`${path}/description`}>
            <DescriptionSection description={category.description} />
          </Route>
      </Switch>
      </RootContainer>
      <ScrollToTop />
    </Root>
  )
}
