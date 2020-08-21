import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectContainter, CategorySelection, Option } from './style';
import { listAllCategories } from '../../../utils/api-helpers/category';

export default function CategorySelect({ inputChangeTrigger, productCategory }) {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const apiResult = await listAllCategories();
    if (apiResult.ok && apiResult.status == 200)
      setCategories(apiResult.data.data.docs);
    return apiResult;
  };

  useEffect(() => {
    fetchCategories();
  }, [])
  
  return (
    <SelectContainter>
      <CategorySelection 
        name="category"
        id="category-select"
        onChange={inputChangeTrigger('category')}
        value={productCategory}
      >
        <Option value="">انتخاب کتگوری</Option>
      {
        categories.map(
          category => <Option key={category._id} value={category._id}>{category.name}</Option>
        )
      }
      </CategorySelection>
    </SelectContainter>
  );
};

CategorySelect.propTypes = {
  inputChangeTrigger: PropTypes.func.isRequired,
  productCategory: PropTypes.string,
}
