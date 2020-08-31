import React, { useState, useEffect } from 'react'
import { Root, NavIcon, CatModal, CategoryList, EachCategory, } from './style'
import SortIcon from '../../icons/SortBy.icon';
import CloseModal from '../../user/Login/CloseModal';
import { listAllCategories } from '../../../utils/api-helpers/category'
import Loader from '../../Loader/LoadingAnimation';
import { NavLink } from 'react-router-dom';

export default function index({selectedCategory}) {
  const [values, setValues] = useState({
    categories: [],
    openModal: false,
    loading: false,
  });

  const fetchCategories = async () => {
    setValues({ ...values, loading: true });
    const apiResult = await listAllCategories();
    if (apiResult.ok && apiResult.status == 200)
      setValues({ ...values, categories: apiResult.data.data.docs, loading: false });
  };

  useEffect(() => {
    setValues({ ...values, openModal: false})
  }, [selectedCategory])
  useEffect(() => {
    fetchCategories();
  }, []);

  const openModalHandler = () => {
    setValues({ ...values, openModal: !values.openModal });
  };
  const closeModal = () => {
    setValues({ ...values, openModal: false });
  };

  return (
    <Root>
      <NavIcon onClick={openModalHandler}>
        <SortIcon />
      </NavIcon>
      <CatModal isOpen={values.openModal} className={values.openModal && "open"}>
        <CloseModal closeHandler={closeModal} />
        {
          values.loading ?
          <Loader loading={values.loading} /> :
          <CategoryList>
            {
              values.categories.map(category => (
                <EachCategory 
                  key={category._id}
                  className={category._id == selectedCategory._id && 'active'}
                >
                  <NavLink to={`/categories/${category._id}`}>
                    {category.name}
                  </NavLink>
                </EachCategory>
              ))
            }
          </CategoryList>
        }
      </CatModal>
    </Root>
  )
}
