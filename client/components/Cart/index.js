import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  CartAmountCounter,
  CartPage,
  CartTabs,
  CheckoutItems,
  CheckoutHeader,
  CheckoutDeliveryPrice,
  CheckoutDeliveryType,
  CheckoutItemsCount,
  Root,
} from './style';
import RootContainer from '../RootContainer';
import CheckoutItem from './CheckoutItem';
import { toFarsiNumber } from '../../utils/globalHelpers';
import DeliveryIcon from '../icons/Delivery.icon';

export default function index() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <CartPage id="cart-page">
      <RootContainer>
        <Root>
          <CartTabs>
            <NavLink to="/cart/">
               سبد خرید
               <CartAmountCounter>{toFarsiNumber(cart.length)}</CartAmountCounter>
            </NavLink>
          </CartTabs>
          <CheckoutItems>
            <CheckoutHeader>
              <CheckoutDeliveryType>
                <DeliveryIcon />
                ارسال عادی
              </CheckoutDeliveryType>
              <CheckoutItemsCount>({toFarsiNumber(cart.length)}) کالا</CheckoutItemsCount>
              <CheckoutDeliveryPrice>هزینه ارسال: رایگان</CheckoutDeliveryPrice>
            </CheckoutHeader>
            {
              cart.map(item => (
                <CheckoutItem key={item._id} item={item} />
              ))
            }
          </CheckoutItems>
        </Root>
      </RootContainer>
    </CartPage>
  )
}
