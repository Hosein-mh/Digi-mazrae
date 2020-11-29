import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  HeadLine,
  HeadTitle,
  Root,
} from './style';
import { listProductsByCategory } from '../../../utils/api-helpers/product';
import Loader from '../../Loader';
import Carousel from 'react-elastic-carousel';
import ProductCard from '../Store/ProductCard';

export default function index({ categoryId }) {
  const amount = useSelector(state => 
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product._id] = product.amount;
      return sumAmount;
    }, {})
  );

  const [values, setValues] = useState({
    loading: false,
    succeed: false,
    data: null,
    error: '',
  });

  const getRelatedProductsData = async (categoryId, signal) => {
    setValues({...values, loading: true, succeed: false, error: '', data: null });
    let response = await listProductsByCategory(signal, categoryId);
    if (response && response.ok && response.status == 200) {
      setValues({ ...values, loading: false, succeed: true, error: '', data: response.data.data.docs});
    } else {
      setValues({ ...values, loading: false, succeed: false, error: 'محصول مرتبطی یافت نشد', data: null});
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    getRelatedProductsData(categoryId, signal);

    return function cleanUp() {
      abortController.abort();
    };
  }, [categoryId])

  return (
    <Root>
      {
        values.succeed &&
        <HeadLine>
          <HeadTitle>
            محصولات مرتبط
          </HeadTitle>
          <div style={{position: 'relative'}}>
          {
            values.loading &&
            <Loader loading={values.loading} />
          }
          {
            values.data.length > 0 &&
            <Carousel
              itemsToShow={3}
              enableSwipe={false}
            >
              {values.data.map(product => <ProductCard key={product._id} product={product} cartAmount={amount[product._id]} />)}
            </Carousel>

          }
          </div>
        </HeadLine>
      }
    </Root>
  )
}
