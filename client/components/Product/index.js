import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../utils/api-helpers/product';
import RootContainer from '../RootContainer';
import {
  Root,
  Container,
  NavContainer,
  Links,
  ProductArticle,
  ProductContent,
  ProductHead,
  ProductTitle,
  ProductInfo,
  ProductConfig,
  ProductCategory,
  ProductParams,
  ParamsTitle,
  ParamsItem,
  AddsInfo,
  Quality,
  PriceArea,
  Price,
  BasketAndAmount,
  CartItemRemove,
  Quantity,
  AddToBasketButton,
} from './style';
import GalleryViewer from './Gallery';
import QualityIconCheck from '../icons/QualityCheck.icon';
import FlappiIcon from '../icons/Flappi.icon';
import { toFarsiNumber } from '../../utils/globalHelpers';
import QuantitySelector from './CartQuantitySelector';
import TrashIcon from '../icons/Trash.icon';

import { removeFromCart, addToCartRequest } from '../../redux/actions/cart';

export default function ProductPage() {
  const initialState = {
    loading: false,
    error: '',
    productData: {},
    gallery: [],
    selectedPhoto: null,
    category: { name: 'دسته بندی' },
  };
  const { productId } = useParams();
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();
  const cart = useSelector(state => 
    state.cart
  );
  const amount = cart.reduce((sumAmount, product) => {
    sumAmount[product._id] = product.amount;
    return sumAmount;
  }, {});

  const cartItemArray = cart.filter(item => {
    return item._id == values.productData._id;
  })

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
            ...values, loading: false, error: productData.data.error,
            productData: {},
          }) : 
          setValues(initialState);
      }
    }
    fetchData();
  }, [productId])

  const removeItem = () => {
    dispatch(removeFromCart(values.productData._id))
  };
  const addItem = () => {
    dispatch(addToCartRequest(values.productData._id))
  };

  return (
    <Root>
      <RootContainer>
        {
          values.loading &&
          <div>loading ...</div>
        }
        {
          values.productData.name &&
          <Container>
          <NavContainer>
            <Links>
              <Link to={'/'}>خانه</Link>
              <Link id='each' to={'/categories/' + values.category._id }>{values.category.name}</Link>
            </Links>
          </NavContainer>
          <ProductArticle>
            <GalleryViewer gallery={[values.productData.photo, ...values.gallery]} />
            <ProductContent>
              <ProductHead>
                <ProductTitle>{values.productData.name}</ProductTitle>
              </ProductHead>
              <ProductInfo>
                <ProductConfig>
                  <ProductCategory>
                    <span>دسته بندی : </span>
                    <Link to={'/categories/' + values.category._id}>{values.category.name}</Link>
                  </ProductCategory>
                  <ProductParams>
                    <ParamsTitle>
                      <span id="data-title">ویژگی های محصول:</span>
                      <ParamsItem key="0">ویژگی اول</ParamsItem>
                      <ParamsItem key="1">ویژگی دوم</ParamsItem>
                      <ParamsItem key="2">ویژگی سوم</ParamsItem>
                      <ParamsItem key="3">ویژگی چهارم</ParamsItem>
                    </ParamsTitle>
                  </ProductParams>
                </ProductConfig>
              </ProductInfo>
            </ProductContent>
            <AddsInfo>
              <Quality>
                <QualityIconCheck />
                <span>کنترل کیفیت محصول پیش از بسته بندی</span>
              </Quality>
              <Quality>
                <FlappiIcon />
                <span>موجود در انبار</span>
              </Quality>
              <PriceArea>
                <span>قیمت</span>
                <Price>{toFarsiNumber(values.productData.price)}<span>تومان</span></Price>
              </PriceArea>
              <BasketAndAmount>
                {
                  ( amount[values.productData._id] !== undefined &&
                    amount[values.productData._id] > 0 ) ?
                    <Quantity>
                      <QuantitySelector item={cartItemArray[0]} />
                      <span id="describe">کیلو اضافه شد</span>
                      <CartItemRemove onClick={removeItem}>
                        <TrashIcon />
                        حذف
                      </CartItemRemove>
                    </Quantity> :
                  <AddToBasketButton onClick={addItem}>افزودن به سبد خرید</AddToBasketButton>
                }
              </BasketAndAmount>
            </AddsInfo>
          </ProductArticle>
        </Container>
        }
      </RootContainer>
    </Root>
  )
}
