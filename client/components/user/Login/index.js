import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import { Root, Trigger } from './style';
import { useCookies } from 'react-cookie';
import { dispatchUserInfoByToken, requestUserLogout } from '../../../utils/api-helpers/user';

export default function Login({ fired }) {
  let history = useHistory();
  const [withModal, setwithModal] = useState('signin');
  const [openModal, setOpenModal] = useState(fired);

  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [cookies, setCookie, removeCookie] = useCookies(['g_t']);

  useEffect(() => {
    const token = {
      googleToken: cookies.g_t,
    };
    if (token.googleToken) {
      dispatchUserInfoByToken(dispatch, token);
    }
    removeCookie('g_t');
  }, [cookies.g_t]);

  useEffect(() => {
  }, [userState]);

  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  }
  const switchView = (modalName) => {
    setwithModal(modalName);
  }

  const handleSwich = (name) => {
    switchView(name);
  }
  const handleLogout = () => {
    requestUserLogout(dispatch);
    history.push('/');
  }

  return (
    <Root>
    <Trigger onClick={() => {
      !(userState.data && userState.data.token) ?
      modalOpenHandler() :
      handleLogout();
      }}>
      {(userState.data && userState.data.token) ? 'خروج' : 'ورود | ثبت نام'}
    </Trigger>
      {
        withModal && withModal == 'signin' && <Signin switcher={handleSwich} openModal={openModal} modalHandler={modalOpenHandler} />
      }
      {
        (withModal && withModal == 'signup' && <Signup switcher={handleSwich} openModal = {openModal} modalHandler={modalOpenHandler} />)
      }
    </Root>
  )
}

Login.defaultProps = {
  fired: false
}
