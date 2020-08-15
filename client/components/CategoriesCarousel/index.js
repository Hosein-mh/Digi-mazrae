import React, { useState, useEffect } from 'react';
import {
  Root,
} from './style';
import Carousel from '../Carousel';
import { listAllCategories } from '../../utils/api-helpers/category';

function CategoriesCarousel() {
  //must be deleted after api and alternate with fetch
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let resp = await listAllCategories();
      if (resp.ok && resp.status == 200 && resp.data) {
        const { docs } = resp.data.data;
        setCategories(docs);
      }
    };
    fetchData();
  }, []);

  return (
    <Root id="cagegories_root">
      <Carousel categories={categories} />
    </Root>
  )
}

export default CategoriesCarousel;
