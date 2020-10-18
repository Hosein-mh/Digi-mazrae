import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { 
  Root,
  CartItem,
  CartItemThumb,
  CartItemTitle,
  CartItemInfo,
  CartItemRow,
  CartItemRemove,
  CartItemStatus,
  QuantityOptions,
  CartItemPrice,
} from './style';
import QuantitySelector from '../QuantitySelector';
import TrashIcon from '../../icons/Trash.icon';
import { toFarsiNumber } from '../../../utils/globalHelpers';

export default function index({ item }) {

  const itemPrice = item.price * item.amount;
  return (
    <Root>
      <CartItem>
        <CartItemThumb>
          <Link to={`/product/${item._id}`}>
            <img src={`/${item.photo}`} alt={item.name} />
          </Link>
        </CartItemThumb>
        <CartItemInfo>
          <CartItemTitle>{item.name}</CartItemTitle>
          <CartItemRow>
            <QuantityOptions>
              <QuantitySelector item={item} />
              <CartItemRemove>
                <TrashIcon />
                حذف
              </CartItemRemove>
              <CartItemStatus>
                <span>موجود در انبار</span>
              </CartItemStatus>
            </QuantityOptions>
            <CartItemPrice>
              <div>
                {toFarsiNumber(itemPrice)} <span>تومان</span>
              </div>
            </CartItemPrice>
          </CartItemRow>
        </CartItemInfo>
      </CartItem>
    </Root>
  )
};

index.prototype = {
  item: PropTypes.object.isRequired,
};
