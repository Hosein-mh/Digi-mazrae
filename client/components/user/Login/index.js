import React, { useState, Fragment } from 'react'
import Signin from './Signin';
import Signup from './Signup';
import { Root, Trigger } from './style';

export default function index() {
  const [withModal, setwithModal] = useState('signin');
  const [openModal, setOpenModal] = useState(false);
  const modalOpenHandler = () => {
    setOpenModal(!openModal);
  }
  const switchView = (modalName) => {
    console.log('clicked', modalName)
    setwithModal(modalName);
  }

  const handleSwich = (name) => {
    switchView(name);
  }

  return (
    <Root>
    <Trigger onClick={modalOpenHandler}>
        ورود | ثبت نام
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
