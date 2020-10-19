import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toFarsiNumber } from '../../../utils/globalHelpers';
import {
  Minus,
  Root, Selector,
} from './style';
import { updateAmountRequest } from '../../../redux/actions/cart';

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
      <Selector onClick={increment}>+</Selector>
      {toFarsiNumber(item.amount)}
      <Selector onClick={decrement}><Minus /></Selector>
    </Root>
  )
}

index.propTypes = {
  item: PropTypes.object.isRequired,
};
