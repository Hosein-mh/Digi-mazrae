import {
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_REMOVE,
  CART_UPDATE_AMOUNT_REQUEST,
  CART_UPDATE_AMOUNT_SUCCESS,
} from '../constants/cart';

export const addToCartRequest = (id) => ({
  type: CART_ADD_REQUEST,
  id,
});

export const addToCartSuccess = (product) => ({
  type: CART_ADD_SUCCESS,
  product,
});

export const removeFromCart = (id) => ({
  type: CART_REMOVE,
  id,
});

export const updateAmountRequest = (id, amount) => ({
  type: CART_UPDATE_AMOUNT_REQUEST,
  id,
  amount,
});

export const updaateAmountSuccess = (id, amount) => ({
  type: CART_UPDATE_AMOUNT_SUCCESS,
  id,
  amount,
});