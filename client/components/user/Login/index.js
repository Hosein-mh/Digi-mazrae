import React, { useState, useEffect } from 'react'
import Signin from './Signin';
import Signup from './Signup';
import { Root, Trigger } from './style';
import auth from '../../auth/auth-helper';

export default function Login({ fired }) {
  const [withModal, setwithModal] = useState('signin');
  const [openModal, setOpenModal] = useState(fired);

  let jwt;

  useEffect(() => {
    jwt = auth.isAuthenticated();
  }, [auth.isAuthenticated()]);

  useEffect(() => {}, [jwt]);

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
    auth.clearJWT(() => {});
  }

  return (
    <Root>
    <Trigger onClick={() => {
      !auth.isAuthenticated() ?
      modalOpenHandler() :
      handleLogout();
      }}>
      {auth.isAuthenticated() ? 'خروج' : 'ورود | ثبت نام'}
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
