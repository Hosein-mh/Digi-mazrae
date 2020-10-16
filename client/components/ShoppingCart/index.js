import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Root,
  CartAmount,
  CartInfo,
  CartInfoHeader,
  CartInfoHeaderCount,
  CartBasketList,
  CartInfoFooter,
  CartInfoTotal,
  CartInfoTotalAmount,
  CartInfoTotalText,
  CartInfoTotalNumber,
} from './style';
import ShopCartIcon from '../icons/ShoppingCart.icon';
import { toFarsiNumber } from '../../utils/globalHelpers';
import CartItem from './CartItem';

export default function index() {
  const cart = useSelector(state => state.cart);
  const totalAmount = cart.reduce((total, currentItem) => {
    total += currentItem["amount"] * currentItem["price"];
    return total;
  },0);

  return (
    <Root hasAmount={totalAmount && totalAmount > 0}>
      <CartAmount show={cart.length && cart.length > 0}>
        {cart.length > 0 && toFarsiNumber(cart.length)}
      </CartAmount>
      <Link to="/cart">
        <ShopCartIcon/>
      </Link>
      <CartInfo>
        <CartInfoHeader>
          <CartInfoHeaderCount>
            {toFarsiNumber(cart.length) + " کالا"}
          </CartInfoHeaderCount>
          <Link to="/cart">
            <span>مشاهده سبد خرید</span>
          </Link>
        </CartInfoHeader>
        <CartBasketList>
          {
            cart.map(item => {
              return (<CartItem item={item} />);
            })
          }
        </CartBasketList>
        <CartInfoFooter>
          <CartInfoTotal>
            <CartInfoTotalText>مبلغ قابل پرداخت</CartInfoTotalText>
            <CartInfoTotalAmount>
              <CartInfoTotalNumber>{toFarsiNumber(totalAmount)}</CartInfoTotalNumber>
              <span>تومان</span>
            </CartInfoTotalAmount>
          </CartInfoTotal>
          <Link to="/shiping/" className='cart_info-submit'>ثبت سفارش</Link>
        </CartInfoFooter>
      </CartInfo>
    </Root>
  )
}
