import React, { useState } from 'react';
import { Root, AddButton, SelectItems, SelectItemsContainer, ItemOption } from './style';
import { toFarsiNumber } from '../../../../utils/globalHelpers';
import { useDispatch } from 'react-redux';

import * as CartActionS from '../../../../redux/actions/cart';

export default function index({ product, cartAmount }) {
  const dispatch = useDispatch();

  const [amountToBuy, setAmountToBuy] = useState(0);
  const [showHowMany, setShowHowMany] = useState(false);
  const handleAmountToBuy = (e) => {
    e.target.value == 0 && setAmountToBuy(0);
    setAmountToBuy(e.target.value);
    setShowHowMany(false);
  };

  const handleAddProduct = (id) => {
    setShowHowMany(!showHowMany);
    !cartAmount &&
    dispatch(CartActionS.addToCartRequest(id));
  }
  const increment = (id) => {
    dispatch(CartActionS.updateAmountRequest(id, cartAmount + 1));
  }
  const decrement = (id) => {
    dispatch(CartActionS.updateAmountRequest(id, cartAmount - 1));
  }
  const remove = (id) => {
    setShowHowMany(false);
    dispatch(CartActionS.removeFromCart(id));
  }
  const renderCartAmount = (amount) => (
    <div>
      {toFarsiNumber(amount)} کیلو
    </div>
  )

  return (
    <Root>
      <AddButton haveAmount={cartAmount} onClick={() => handleAddProduct(product._id)}>
        {( cartAmount && cartAmount !== 0 )? renderCartAmount(cartAmount) : "+"}
      </AddButton>
      <SelectItemsContainer className={showHowMany && "show"}>
        <SelectItems>
          {
            amountToBuy ? <ItemOption value="0" ><span>-</span>حذف</ItemOption> : ''
          }
          <ItemOption onClick={() => increment(product._id)}>+</ItemOption>
          <span>{cartAmount}</span>
          <ItemOption onClick={() => decrement(product._id)}>-</ItemOption>
        </SelectItems>
        <ItemOption onClick={() => remove(product._id)}>حذف</ItemOption>
      </SelectItemsContainer>
    </Root>
  )
}
