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
import { signin } from '../../auth/api-auth';
import auth from '../../auth/auth-helper';
import Loader from '../../Loader';

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
    loading: false,
    success: false,
    error: ''
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
      })
    } else {
      setValues({
        ...values,
        [name]: e.target.value,
      })
    }
  }
  const localSubmit = () => {
    setValues({ ...values, loading: true, success: false });

    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    }

    signin(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false, success: false });
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values, error: '', loading: false, success: true });
          setTimeout(() => {
            props.modalHandler();
          }, 1000);
        })
      }
    })
  }

  simpleValidator.current.purgeFields();

  return (
    <Modal open={props.openModal}>
        <ModalDarkBehind onClick={props.modalHandler} />
        <ModalCard className={props.openModal ? 'active' : ''} >
          {
            !values.success && !values.loading &&
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
              <LoginButton
                disabled={!simpleValidator.current.allValid()}
                onClick={localSubmit}
              >ورود</LoginButton>
              <GoogleButton>ورود سریع با گوگل</GoogleButton>
              <Error>{values.error}</Error>
              <DirectSignup onClick={() => props.switcher('signup')}>ایجاد حساب کاربری / signup</DirectSignup>
            </ModalInputs>
          }
          {
            values.loading && !values.success && <Loader loading={true} completed={false} />}
          {
             values.success && !values.loading && <Loader loading={false} completed={true} message="با موفقیت وارد شدید" />
          }
        </ModalCard>
      </Modal>
  )
}

Signin.propTypes = {
  switcher: PropTypes.func,
  openModal: PropTypes.bool,
  modalHandler: PropTypes.func.isRequired
}
