import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { listProductsByPage } from '../../../utils/api-helpers/product';
import { 
  Root,
  Title,
  PlusIcon,
  ProductContainer,
} from './style';
import Product from './Product';
import PageNavigator from '../../Table/PageNavigator';


export default function index() {
  const [values, setValues] = useState({
    page: 1,
    pages: 1,
    products: [],
    reload: false,
    loading: false,
    succeed: false,
    error: '',
  });
  const history = useHistory();
  const user = useSelector(state => state.user.data);

  const fetchData = async (signal, page) => {
  
    const apiResult = await listProductsByPage(signal, page);
    if (apiResult.ok && apiResult.status == 200)
      setValues({ ...values,
        loaing: false, succeed: true,
        pages: apiResult.data.data.pages,
        products: apiResult.data.data.docs,
        error: '',
        reload: true,
      });
    else 
      setValues({
        ...values,
        error: 'مشکل در دریافت اطلاعات این صفحه',
      });
  }

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetchData(signal, values.page);
    return function cleanUp() {
      abortController.abort();
    }
  }, [values.page, values.reload]);

  // PageNavigator triggers
  const nextPage = () => {
    if (values.page == values.pages) {
      return;
    } else 
      setValues({...values, page: values.page + 1 })
  };
  const prevPage = () => {
    if (values.page==1) {
      return;
    } else
      setValues({...values, page: values.page - 1 })
  };
  const switchToPage = (page) => () => {
    setValues({...values, page});
  };

  return (
    <Root>
      <Title>لیست محصولات</Title>
      <ProductContainer>
        {
          values.products.map(
            product => <Product 
                        product={product}
                        key={product._id} 
                        />
          )
        }
      </ProductContainer>
      <PageNavigator
        id="page-navigator"
        nextPageTrigger={nextPage}
        prevPageTrigger={prevPage}
        page={values.page}
        pages={values.pages}
        switchToPageTrigger={switchToPage}
      />
      <PlusIcon onClick={() => history.push('/dashbord/products/create')}>
        +
      </PlusIcon>
    </Root>
  )
}
