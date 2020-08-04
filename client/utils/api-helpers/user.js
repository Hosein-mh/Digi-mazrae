
import fetchHelper from './fetch-helper';
import {
  dispatchUserAction,
  dispatchUserLoginErrorAction,
  dispatchUserLoginLoadingAction,
  dispatchUserLoginResetAction,
} from '../../redux/actions/user';
import { USER_FETCH_LOADING, USER_FETCH_SUCCEED, USER_FETCH_ERROR } from '../../redux/constants/user';
import auth from '../../components/auth/auth-helper';
import { json } from 'body-parser';

export const requestUserCreate = async (user) => {
  const url = '/api/users/';
  const config = {
    method: 'POST',
    body: JSON.stringify(user),
  };

  try {
    const resp = await fetchHelper(fetch, url, config);
    return resp;
  } catch (e) {
    console.log(e);
  }
}

export const requestUserLogin = async userInfo => {
  const url = '/auth/signin/';
  const config = {
    method: 'POST',
    body: JSON.stringify(userInfo),
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (e) {
    console.log(e);
  };
};

export const requestUserLogout = async (dispatch, userId) => {
  const url = '/auth/signout/' + userId;
  const config = {
    method: 'GET',
  };
  try {
    const resp = await fetchHelper(fetch, url, config);
    if (resp.ok) {
      dispatch(dispatchUserLoginResetAction());
    }
  } catch (error) {
    console.log(error);
  };
};

export const dispatchUserInfo = async (dispatch, userInfo) => {
  const url = '/auth/signin/';
  const config = {
    method: 'POST',
  };
  const types = {
    loading: USER_FETCH_LOADING,
    succeed: USER_FETCH_SUCCEED,
    error: USER_FETCH_ERROR,
  };
  dispatch(dispatchUserLoginLoadingAction());
  try {
    const isUserLogedin = await requestUserLogin(userInfo);
    if (isUserLogedin.status === 500) {
      dispatch(
        dispatchUserLoginErrorAction('مشکلی پیش آمده لطفا بعدا تلاش نمایید.'),
      );
    }
    if (!isUserLogedin.ok) {
      dispatch(
        dispatchUserLoginErrorAction(
          'ایمیل یا رمز عبور شما اشتباه است , در صورت لزوم با پشتیبانی تماس بگیرید.'
        ),
      );
    } else {
      auth.authenticate(isUserLogedin.data.token, () => {
        dispatch(dispatchUserAction(types, isUserLogedin));
      });
    }
  } catch (err) {
    dispatch(
      dispatchUserLoginErrorAction(
        'متاسفانه مشکلی پیش آمده. لطفا اتصال خود به اینتنرنت را بررسی کنید و سپس مجدد تلاش کنید.',
      ),
    );
  };
  return null;
}

export const dispatchUserInfoByToken = async (dispatch, token) => {
  const url = '/api/userbytoken/';
  const config = {
    method: 'POST',
    body: JSON.stringify(token),
  };
  const types = {
    loading: USER_FETCH_LOADING,
    succeed: USER_FETCH_SUCCEED,
    error: USER_FETCH_ERROR,
  };
  dispatch(dispatchUserLoginLoadingAction());
  try {
    const isUserLogedin = await fetchHelper(fetch, url, config);
    if (isUserLogedin.status === 500) {
      dispatch(
        dispatchUserLoginErrorAction('مشکلی پیش آمده لطفا بعدا تلاش نمایید.'),
      );
    }
    if (!isUserLogedin.ok) {
      dispatch(
        dispatchUserLoginErrorAction(
          'توکن وارد شده اشتباه است یا منقضی شده.'
        ),
      );
    } else {
      auth.authenticate(isUserLogedin, () => {
        dispatch(dispatchUserAction(types, isUserLogedin));
      });
    }
  } catch (err) {
    console.log(err);
    dispatch(
      dispatchUserLoginErrorAction(
        'متاسفانه مشکلی پیش آمده. لطفا اتصال خود به اینترنت را بررسی کنید و سپس مجدد تلاش کنید.',
      ),
    );
  };
  return null;
}