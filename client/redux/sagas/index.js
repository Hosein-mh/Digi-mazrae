import { all } from 'redux-saga/effects';
import dispatchResponseToReducer from './dispatchResponseToReducer';
import cart from './cart';

export default function* rootSaga() {
  yield all([dispatchResponseToReducer(), cart]);
}