import React, { useState, useEffect } from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  Root, 
  CategoryCover, 
  CoverMask,
  CategoryRoundImg,
  CategoryTitle,
  CategoryDesc,
  ActionGroup,
  ActionButton,
  ActionBorder,
  LeftPart,
  ShowMoreButton,
  ShareGroup,
} from './style';
import Loader from '../../Loader';
import CategoriesMenu from '../CategoriesMenu';
import ShareButton from '../../ShareButton';

export default function index({ category }) {
  const [loading, setLoading] = useState(false);
  const [isDescPage, setisDescPage] = useState(false);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    setisDescPage(false)
    if (!category) {
      setLoading(true);
    } else {
      let myDoc =document.getElementsByClassName('category_desc');
      myDoc[0].innerHTML = category.description;
      setLoading(false);
    }
  }, [category])

  return (
    <Root id="category_head">
      {
        loading ?
        <Loader loading={loading} /> :
        <>
          <CategoryCover src={"/" + category.photo} />
          <CoverMask />
          <CategoriesMenu selectedCategory={category} />
          <ShareGroup id="share-group">
            <ShareButton />
          </ShareGroup>
          <CategoryRoundImg className={'for-below-tablet'} src={"/" + category.photo} />
          <CategoryTitle>
            انواع {category.name}
            <ActionGroup>
              <ActionButton onClick={() => setisDescPage(false)}>
                <NavLink exact to={`${url}`}>
                  فروشگاه
                </NavLink>
              </ActionButton>
              <ActionButton onClick={() => setisDescPage(true)}>
                <NavLink to={`${url}/description`} className="store" style={{color: "#fff"}}>
                  درباره دسته بندی
                </NavLink>
              </ActionButton>
              <ActionBorder floatLeft={isDescPage} />
            </ActionGroup>
          </CategoryTitle>
          <CategoryRoundImg className={'for-aboove-tablet'} src={"/" + category.photo} />
          <LeftPart>
            <CategoryDesc className='category_desc'></CategoryDesc>
            <NavLink to={`${url}/description`} style={{ zIndex: 20}}>
              <ShowMoreButton onClick={() => setisDescPage(true)}>نمایش بیشتر</ShowMoreButton>
            </NavLink>
          </LeftPart>          
        </>
      }
    </Root>
  );
};

index.defaultProps = {
  category: {
    name: 'نام کتگوری',
    photo: '/public/img/defaults/product.jpg'
  },
};

index.proptypes = {
  category: PropTypes.object.isRequired,
};
