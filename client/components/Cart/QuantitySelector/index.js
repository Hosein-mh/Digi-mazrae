import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Root,
  Selector,
  Minus,
} from './style';
import { updateAmountRequest } from '../../../redux/actions/cart';
import { toFarsiNumber } from '../../../utils/globalHelpers';

export default function index({ item }) {
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(updateAmountRequest(item._id, item.amount + 1 ));
  }
  const decrement = () => {
    dispatch(updateAmountRequest(item._id, item.amount - 1 ));
  }

  return (
    <Root>
      <Selector
        onClick={increment}
      >+</Selector>
      {toFarsiNumber(item.amount)}
      <Selector
        onClick={decrement}
      ><Minus /></Selector>
    </Root>
  )
};

index.propTypes = {
  item: PropTypes.object.isRequired,
}
