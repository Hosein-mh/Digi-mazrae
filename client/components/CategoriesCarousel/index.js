import React, { useState } from 'react';
import {
  Root,
} from './style';
import Carousel from '../Carousel';

function CategoriesCarousel() {
  //must be deleted after api and alternate with fetch
  const [categories, setCategories] = useState([
    {
      id: 0,
      name: 'انواع گردو',
      index: 0,
      picture: '../../assets/images/walnuts.jpg'
    },
    {
      id: 1,
      name: 'انواع بادام',
      index: 1,
      picture: '../../assets/images/walnuts.jpg'
    },
    {
      id: 2,
      name: 'انواع سبزی',
      index: 2,
      picture: '../../assets/images/walnuts.jpg'
    },
    {
      id: 3,
      name: 'انواع لواشک',
      index: 3,
      picture: '../../assets/images/لواشک1.jpg'
    },
    {
      id: 4,
      name: 'انواع کشمش',
      index: 4,
      picture: '../../assets/images/walnuts.jpg'
    }
  ])

  return (
    <Root id="cagegories_root">
      <Carousel items={categories} />
    </Root>
  )
}

export default CategoriesCarousel;
