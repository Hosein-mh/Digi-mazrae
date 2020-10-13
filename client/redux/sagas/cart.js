import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { addToCartSuccess, updateAmountSuccess } from '../actions/cart';
import { getProduct } from '../../utils/api-helpers/product'
import { CART_ADD_REQUEST, CART_UPDATE_AMOUNT_REQUEST } from '../constants/cart';

function* addToCart({ id }) {
  // Get the current state and perform a selector on it
  const productExists = yield select(state => 
    state.cart.find(p => p._id == id)
  );

  // Checking the stock amount
  const response = yield call(getProduct, id);
  const productStock = response.data.product.tank;
  // If exists, we use the current ammount, otherwise, it's zero because it's not on cart yet
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1; // We update the amount

  if( amount > productStock) {
    toast.error('موجودی انبار کافی نیست');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const data = {
      ...response.data.product,
      amount: 1,
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const response = yield call(getProduct, id);
  const stockAmount = response.data.product.tank;

  if (amount > stockAmount) {
    toast.error('موجودی انبار کافی نیست');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest(CART_ADD_REQUEST, addToCart),
  takeLatest(CART_UPDATE_AMOUNT_REQUEST, updateAmount),
]);