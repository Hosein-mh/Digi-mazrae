import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../../utils/api-helpers/product';
import Loader from '../../Loader';
// Imports styled components
import {
  Root,
  Container,
  NavContainer,
  Links,
  ErrorContainer,
  ProductArticle,
  ProductContent,
  ProductTitle,
  ProductHead,
} from '../style';

// Imports other components
import RootContainer from '../../RootContainer';
import GalleryViewer from '../Gallery';
import RateGroup from '../RateGroup';
import CommentForm from './CommentForm';

const propTypes = {};

const defaultProps = {};

const index = () => {
  // States and constants
  const initialState = {
    loading: false,
    error: '',
    productData: {},
    gallery: [],
    selectedPhoto: null,
    category: { name: 'دسته بندی' },
  };
  const { productId } = useParams();
  const [commentState, setCommentState] = useState({
    title: '',
    StrenghtPoints: '',
    leakPoints: '',
    text: '',
    packingRate: 3,
    qualityRate: 3,
    nutritionalRate: 3,
    freshRate: 3,
  })
  const [values, setValues] = useState(initialState);

  // Hooks effects
  useEffect(() => {
    setValues({
      ...values, loading: true, error: '',
    });
    const fetchData = async () => {
      let apiResponse = await getProduct(productId);
      if (!apiResponse) {
        setValues({
          ...values, loading: false, error: "مشکل در برقراری ارتباط با پایگاه داده", productData: {}
        })
      } else if (!apiResponse.ok || apiResponse.data.error) {
        setValues({...values, loadign: false, productData: {}, error: apiResponse.data.error })
      } else {
        (apiResponse.ok && apiResponse.status == 200) ?
          setValues({
            ... values, loading: false, error: '',
            productData: apiResponse.data.product,
            gallery: [ ...apiResponse.data.product.gallery, apiResponse.data.product.photo ],
            selectedPhoto: apiResponse.data.product.photo,
            category: apiResponse.data.product.category,
          }):
        (!apiResponse.ok || apiResponse.status == 400) ?
          setValues({
            ...values, loading: false, error: "مشکل دریافت اطلاعات محصول",
            productData: {},
          }) : 
          setValues(initialState);
      }
    }
    fetchData();
  }, [productId]);

  // handlers and triggers
  const commentStateTrigger = (name, value) => {
    setCommentState({
      ...commentState,
      [name]: value,
    });
  }

  return (
    <Root>
      <RootContainer>
        {
          values.loading &&
          <Container>
            <Loader loading={values.loading} loadingMessage="لطفا منتظر بمانید" />
          </Container>
        }
        {
          values.error.length > 0 &&
          <Container>
            <ErrorContainer>
              {values.error}
            </ErrorContainer>
          </Container>
        }
        {
          values.productData.name &&
          <Container>
            <NavContainer>
              <Links>
                <Link to={'/'}>خانه</Link>
                <Link id='each' to={'/categories/' + values.category._id }>{values.category.name}</Link>
                <Link id='each' to={'/product/' + values.productData._id }>{values.productData.name}</Link>
              </Links>
            </NavContainer>
            <ProductArticle>
              <GalleryViewer gallery={[values.productData.photo, ...values.gallery]} />
              <ProductContent>
                <ProductHead>
                  <ProductTitle>{values.productData.name}</ProductTitle>
                </ProductHead>
                <RateGroup rateTrigger={commentStateTrigger} curruntState={commentState} />
              </ProductContent>
            </ProductArticle>
            <CommentForm commentState={commentState} commentStateTrigger={commentStateTrigger} />
          </Container>
        }
      </RootContainer>
    </Root>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;

export default index;