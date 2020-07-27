import {
  USER_FETCH_LOADING,
  USER_FETCH_SUCCEED,
  USER_FETCH_ERROR,
  USER_FETCH_RESET,
} from '../constants/user';

const initialState = {
  loading: false,
  succeed: false,
  error: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_LOADING:
      return { ...action.payload };
    case USER_FETCH_SUCCEED:
      return { ...action.payload };
    case USER_FETCH_ERROR:
      return { ...action.payload };
    case USER_FETCH_RESET:
      return initialState;
    default:
      return state;
  };
};