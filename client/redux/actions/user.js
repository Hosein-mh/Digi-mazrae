import {
  USER_FETCH_ERROR,
  USER_FETCH_LOADING,
  USER_FETCH_RESET,
} from '../constants/user';
import { DISPATCH_TO_REDUCER } from '../constants/global';

export const dispatchUserAction = (types, customData) => ({
  type: DISPATCH_TO_REDUCER,
  payload: {
    types,
    customData,
  },
});

export const dispatchUserLoginErrorAction = payload => ({
  type: USER_FETCH_ERROR,
  payload: {
    loading: false,
    succeed: false,
    error: true,
    data: {
      message: payload,
    },
  },
});

export const dispatchUserLoginLoadingAction = () => ({
  type: USER_FETCH_LOADING,
  payload: {
    loading: true,
    succeed: false,
    error: false,
  },
});

export const dispatchUserLoginResetAction = () => ({
  type: USER_FETCH_RESET,
});