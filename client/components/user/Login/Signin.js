import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
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
import Input from '../../Input';
import CloseModal from './CloseModal';
import { dispatchUserInfo, requestUserLoginGoogle } from '../../../utils/api-helpers/user';
import auth from '../../auth/auth-helper';
import Loader from '../../Loader';
import { Link} from 'react-router-dom';

function Signin(props) {
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
  const userState = useSelector(state => state.user);
  const {loading, succeed, error, data} = userState;
  const dispatch = useDispatch();

  useEffect(() => {
  }, [userState]);

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
    dispatchUserInfo(dispatch, user).then(data => console.log(data));
  }

  simpleValidator.current.purgeFields();

  let disableLoginButton = () => {
    return (
      !simpleValidator.current.allValid() ||
      values.email.length === 0 ||
      values.password.length === 0
    ) ? true : false;
  }

  const stopRequestLogin = () => {
    auth.clearJWT(() => {
      dispatch({type: "USER_FETCH_RESET"})
    }, dispatch);
  }

  return (
    <Modal open={props.openModal}>
        <ModalDarkBehind onClick={props.modalHandler} />
        <ModalCard className={props.openModal ? 'active' : ''} >
          {
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
                value={values.password}
                onChange={handleInputChange('password')}
                onBlur={simpleValidator.current.showMessageFor('password')}
                holder="رمز عبور"
                validation={simpleValidator.current.message('password', values.password, 'min:6')}
              />
              <LoginButton
                disabled={disableLoginButton()}
                onClick={localSubmit}
              >ورود</LoginButton>
              <GoogleButton
                as='a'
                href='/auth/google/'
              >ورود سریع با گوگل</GoogleButton>
              <Link to="/password/forgot"
                onClick={props.modalHandler}
              >بازیابی رمز عبور</Link>
              <DirectSignup onClick={() => props.switcher('signup')}>ایجاد حساب کاربری / signup</DirectSignup>
              <Error>{error && data.message}</Error>
            </ModalInputs>
          }
          {
            loading && 
            <Loader loading={true} completed={succeed} error={error}
              succeedMessage = 'با موفقیت وارد شدید.'
              failureMessage = { error && data.message }
            />
          }
          {
            error && data.message &&
            <Loader loading={false} completed={succeed} error={error}
              refreshStateTrigger={stopRequestLogin}
              failureMessage = { error && data.message }
            />
          }
          {
            succeed && data._id &&
            <Loader loading={false} completed={true} error={error}
              succeedMessage = { 'با موفقیت وارد شدید.' }
              afterSucceedTrigger = {
                props.modalHandler
              }
            />
          }
        </ModalCard>
      </Modal>
  )
}

Signin.propTypes = {
  switcher: PropTypes.func,
  openModal: PropTypes.bool,
  modalHandler: PropTypes.func.isRequired
};

export default Signin;
