import React, { useState, useEffect } from 'react';
import { Root, Title, CatList, EachCat, } from './style';
import { listAllCategories } from '../../../utils/api-helpers/category';
import Loader from '../../Loader';
import { NavLink } from 'react-router-dom';

export default function index({selectedCatgory}) {
  const [values, setValues] = useState({
    loadign: false,
    categories: [],
  });

  const fetchCategories = async () => {
    setValues({ ...values, loading: true });
    const apiResult = await listAllCategories();
    if (apiResult.ok && apiResult.status == 200)
      setValues({ ...values, categories: apiResult.data.data.docs, loading: false });
  };

  useEffect(() => {
    fetchCategories();
  }, [selectedCatgory]);


  return (
    <Root>
      {values.loadign && <Loader loading={values.loadign} />}
      <Title>انتخاب دسته بندی</Title>
      <CatList>
        {
          values.categories.map(category => (
            <EachCat key={category._id}>
              <NavLink to={`/categories/${category._id}`}>
                {category.name}
              </NavLink>
            </EachCat>
          ))
        }
      </CatList>
    </Root>
  )
}
