import { put, takeEvery } from 'redux-saga/effects';
import { DISPATCH_TO_REDUCER } from '../constants/global';

function* DispatchResponseToReducer(payload) {
  const { types, customData } = payload.payload;
  yield put({
    type: types.loading,
    payload: { loading: true, succeed: false, error: false, data: null },
  });
  try {
    if (!customData.ok) {
      yield put({
        type: types.error,
        payload: {
          loading: false, 
          succeed: false,
          error: true,
          data: customData.data,
        },
      });
      return;
    }
    yield put({
      type: types.succeed,
      payload: {
        loading: false,
        succeed: true,
        error: false,
        data: customData.data,
      },
    });
  } catch (err) {
    yield put({
      type: types.error,
      payload: {
        loading: false,
        succeed: false,
        error: true,
        data: {
          error: 'متاسفانه مشکلی پیش آمده. لطفا اتصال خود به اینتنرنت را بررسی کنید و سپس مجدد تلاش کنید.',
        },
      },
    });
  }
}

export default function* dispatchResponseToReducer() {
  yield takeEvery(DISPATCH_TO_REDUCER, DispatchResponseToReducer);
}