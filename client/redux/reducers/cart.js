import produce from 'immer';
import {
  CART_ADD_SUCCESS,
  CART_REMOVE,
  CART_UPDATE_AMOUNT_SUCCESS,
} from '../constants/cart'

export default (state = [], action) => {
  switch (action.type) {
    case CART_ADD_SUCCESS:
      return produce(state, draft => {
        const { product } = action;
        
        draft.push(product);
      }); 
      case CART_REMOVE:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p._id === action.id);
        if (productIndex >=0) {
          draft.splice(productIndex, 1);
        }
      });
      case CART_UPDATE_AMOUNT_SUCCESS:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p._id === action.id);
        if (productIndex >=0) {
          draft[productIndex].amount = Number(action.amount);
        }
      }); 
    default:
      return state;
  }
}