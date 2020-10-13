import React, { useState, useEffect} from 'react';
import { Root } from './style';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { listProductsByCategory } from '../../../utils/api-helpers/product';

export default function ProductStore({ categoryId }) {
  const amount = useSelector(state => 
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product._id] = product.amount;
      return sumAmount;
    }, {})
  );
  const [values, setValues] = useState({
    loading: false,
    products: [],
    error: '',
  });
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchData = async () => {
      setValues({ ...values, loading: true, error: '' });
      let resp = await listProductsByCategory(signal, categoryId);
      if (resp.ok && resp.status == 200) {
        setValues({ ...values, loading: false, error: '', products: resp.data.data.docs });
      }
    }
    fetchData();
    return function cleanUp() {
      abortController.abort();
    };
  }, [categoryId]);

  return (
    <Root>
      {
        values.products.map(product => (
          <ProductCard key={product._id} product={product} cartAmount={amount[product._id]} />
        ))
      }
    </Root>
  );
};
