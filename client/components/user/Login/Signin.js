import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';
import {
  Modal,
  ModalDarkBehind,
  ModalCard,
  DigiIcon,
  MazText,
  LoginButton,
  GoogleButton,
  DirectSignup,
  Error,
  ModalInputs
} from './style';
import Input from './Input';
import CloseModal from './CloseModal';
import SigninWithOtp from './SigninWithOtp';

export default function Signin(props) {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      email: 'آدرس ایمیل وارد شده معتبر نیست',
      required: 'این فیلد نمی تواند خالی بماند',
      min: 'این فیلد نمی تواند کمتر از 6 کاراکتر باشد'
    },
    element: (message) => <Error>{message}</Error>,
  }));
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: {
      email: false,
      password: false
    }
  });

  useEffect(() => {
    simpleValidator.current.purgeFields();
  }, [values.email, values.password]);

  const handleInputChange = (name) => (e) => {
    let isFieldValid = simpleValidator.current.fieldValid(name);
    if ( !isFieldValid ) {
      setValues({
        ...values,
        [name]: e.target.value,
        error: {
          ...values.error,
          [name]: true
        }
      })
    } else {
      setValues({
        ...values,
        [name]: e.target.value,
        error: {
          ...values.error,
          [name]: false
        }
      })
    }
  }
  const handleSubmit = () => {
    console.log(values);
  }

  simpleValidator.current.purgeFields();

  return (
    <Modal open={props.openModal}>
        <ModalDarkBehind onClick={props.modalHandler} />
        <ModalCard className={props.openModal ? 'active' : ''} >
          <ModalInputs>
            <CloseModal closeHandler={props.modalHandler} />
            <DigiIcon>
              <MazText>
                ورود به دیجی مزرعه
              </MazText>
            </DigiIcon>
            <Input
              id="email"
              type="text" required
              value={values.email}
              onChange={handleInputChange('email')}
              onBlur={simpleValidator.current.showMessageFor('email')}
              holder="آدرس ایمیل"
              validation={simpleValidator.current.message('email', values.email, 'email')}
              />
            <Input 
              id="password"
              type="password" required
              onChange={handleInputChange('password')}
              onBlur={simpleValidator.current.showMessageFor('password')}
              holder="رمز عبور"
              validation={simpleValidator.current.message('password', values.password, 'min:6')}
            />
            <LoginButton disabled={!simpleValidator.current.allValid()}>ورود</LoginButton>
            <GoogleButton>ورود سریع با گوگل</GoogleButton>
            <SigninWithOtp />
            <DirectSignup onClick={() => props.switcher('signup')}>ایجاد حساب کاربری / signup</DirectSignup>
          </ModalInputs>
        </ModalCard>
      </Modal>
  )
}

Signin.propTypes = {
  switcher: PropTypes.func,
  openModal: PropTypes.bool,
  modalHandler: PropTypes.func
}
