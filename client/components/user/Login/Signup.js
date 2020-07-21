import React, { useState, useRef, useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import {
  Root,
  Modal,
  ModalDarkBehind,
  ModalCard,
  ModalInputs,
  CloseButton,
  DigiIcon,
  DigiText,
  LoginButton,
  DirectSignup,
  Error,
} from './style';
import Input from './Input';
import Loader from '../../Loader';
import { create } from '../api-user';
import PropTypes from 'prop-types';

export default function Signup(props) {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      email: 'آدرس ایمیل وارد شده معتبر نیست',
      required: 'پرکردن این فیلد الزامی است',
      min: 'این فیلد نمی تواند کمتر از 6 کاراکتر باشد',
      max: 'این فیلد نمی تواند بیشتر از 20 کاراکتر باشد'
    },
    element: (message) => <Error>{message}</Error>
  }));
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    loading: false,
    success: false,
    error: '',
  });

  const handleInputChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  }
  const handleSubmit = () => {
    let isAllValid = simpleValidator.current.allValid();
    if ( isAllValid ) {
      const user = {
        name: values.name || undefined,
        email: values.email || undefined,
        password: values.password || undefined
      }
      setValues({...values, loading: true});
      create(user).then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false, loading: false });
        } else {
          setValues({ ...values, error: '', success: true, loading: false});
            setTimeout(() => {
              setValues({...values, success: false});
              props.switcher('signin');
            }, 2000);
        };
      });
    } 
  }

  return (
    <Root>
      <Modal open={props.openModal}>
        <ModalDarkBehind onClick={props.modalHandler} />
        <ModalCard className={props.openModal ? 'active' : ''} >
          {
            !values.success && !values.loading &&
            <ModalInputs>
              <CloseButton onClick={props.modalHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25.657" height="25.657" viewBox="0 0 25.657 25.657">
                  <g id="closeIcon" transform="translate(2.828 2.828)">
                    <line id="Line_1" data-name="Line 1" x1="20" y2="20" fill="none" stroke="#d92027" strokeLinecap="round" strokeWidth="4"/>
                    <line id="Line_2" data-name="Line 2" x2="20" y2="20" fill="none" stroke="#d92027" strokeLinecap="round" strokeWidth="4"/>
                  </g>
                </svg>
              </CloseButton>
              <DigiIcon>
                <DigiText>
                  ساخت حساب کاربری جدید
                </DigiText>
              </DigiIcon>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required value={values.name}
                  onChange={handleInputChange('name')}
                  onBlur={simpleValidator.current.showMessageFor('name')} 
                  validation={simpleValidator.current.message('name', values.name, 'min:6|max:20')}
                  holder="نام و نام خانوادگی"
                />
              <Input
                id="email"
                name="email"
                type="text"
                required value={values.email}
                onChange={handleInputChange('email')}
                onBlur={simpleValidator.current.showMessageFor('email')}
                holder="آدرس ایمیل"
                validation={simpleValidator.current.message('email', values.email, 'email')}
              />
              <Input
                id="password"
                name="password"
                type="password"
                holder="رمز عبور"
                required value={values.password}
                onChange={handleInputChange('password')}
                onBlur={simpleValidator.current.showMessageFor('password')}
                validation={simpleValidator.current.message('password', values.password, 'min:6')}
              />
              <LoginButton onClick={handleSubmit} disabled={!simpleValidator.current.allValid()}>ایجاد</LoginButton>
              <Error>{values.error}</Error>
              <DirectSignup onClick={() => props.switcher('signin')}>از قبل حساب کاربری دارید؟/signin</DirectSignup>
            </ModalInputs>
          }
          {
            values.loading && !values.success && <Loader loading={true} completed={false} />}
          {
             values.success && !values.loading && <Loader loading={false} completed={true} message="اکانت با موفقیت ایجاد شد" />
          }
        </ModalCard>
      </Modal>
    </Root>
  )
}

Signup.propTypes = {
  switcher: PropTypes.func,
  openModal: PropTypes.bool,
  modalHandler: PropTypes.func
}

