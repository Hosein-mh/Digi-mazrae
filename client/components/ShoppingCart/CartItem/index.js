import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../redux/actions/cart';
import {
  Root,
  CartItemImage,
  CartItemContent,
  ItemTitle,
  ItemShipingType,
  CartItemFooter,
  ItemProp,
  ItemTrash
} from './style';
import ExistFormIcon from '../../icons/ExistForm.icon';
import { toFarsiNumber } from '../../../utils/globalHelpers';
import TrashIcon from '../../icons/Trash.icon';

export default function index({ item }) {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  }

  return (
    <Root>
      <Link to={`/product/${item._id}`} class="cart_Item-Link">
        <CartItemImage>
          <img src={"/" + item.photo} alt={item.name} />
        </CartItemImage>
        <CartItemContent>
          <ItemTitle>{item.name}</ItemTitle>
          <ItemShipingType>
            <ExistFormIcon />
            <span>موجود در انبار</span>
          </ItemShipingType>
        </CartItemContent>
      </Link>
      <CartItemFooter>
        <ItemProp>{toFarsiNumber(item.amount)} کیلو</ItemProp>
        <ItemTrash  onClick={() => removeItem(item._id)}>
          <TrashIcon classNmae="delete_from_cart"/>
        </ItemTrash>
      </CartItemFooter>
    </Root>
  )
};

index.proptypes = {
  item: PropTypes.object,
};
