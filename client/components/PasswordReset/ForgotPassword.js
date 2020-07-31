import React, { useState, useRef } from 'react'
import { Root, ResetPasswordForm, Title, Error, Button } from './style';
import SimpleReactValidator from 'simple-react-validator';
import Input from '../Input';
import fetchHelper from '../../utils/api-helpers/fetch-helper';
import Loader from '../Loader';
import { useHistory } from 'react-router';

export default function ForgotPassword() {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      required: 'این فیلد نمی تواند خالی بماند.',
      email: 'ایمیل وارد شده معتبر نیست.'
    },
    element: (message) => <Error>{message}</Error>,
  }));
  const history = useHistory();

  const [values, setValues] = useState({
    email: '',
    loading: false,
    error: '',
    succeed: false,
    message: '',
  });

  const resetState = () => {
    setValues({
      email: '',
      loading: false,
      error: '',
      succeed: false,
      message: '',
    });
  };
  const handleInputChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  }
  const handleSubmit = async () => {
    const url = `/reset_password/user/${values.email}`
    const configs = {
      method: 'POST',
    };
    
    setValues({ ...values, loading: true });
    let resp = await fetchHelper(fetch, url, configs);
    if (resp.ok && resp.status == 200) {
      setValues({ ...values, succeed: true, loading: false, error: '', message: resp.data.message });
    } else if (!resp.ok) {
      setValues({ ...values, succeed: false, loading: false, error: resp.data.message, message: ''});
    } else {
      setValues({ ...values, succeed: false, loading: false, error: 'مشکلی پیش آمد لطفا اتصال خود به اینترنت را بررسی کنید', message: ''})
    }
  }
  
  return (
    <Root>
      <ResetPasswordForm style={{padding: '4rem 2rem'}}>
        <Title>لطفا آدرس ایمیل خود را در کادر زیر وارد نمایید</Title>
        <Input
          id="mail"
          type="text" required
          value={values.email}
          onChange={handleInputChange('email')}
          onBlur={simpleValidator.current.showMessageFor('mail')}
          holder="آدرس ایمیل"
          validation={simpleValidator.current.message('email', values.email, 'email')}
        />
        <Button onClick={handleSubmit}>ارسال لینک بازیابی رمز عبور</Button>
      </ResetPasswordForm>
      {
        values.loading && 
        <Loader loading={true} completed={values.succeed} error={values.error.length > 0}
          succeedMessage = { 'لطفا منتظر بمانید ...' }
          failureMessage = { values.error }
        />
      }
      {
        values.error.length > 0 &&
        <Loader loading={false} completed={values.succeed} error={values.error.length > 0}
          refreshStateTrigger={resetState}
          failureMessage = { values.error }
        />
      }
      {
        values.succeed && values.message.length > 0 &&
        <Loader loading={false} completed={true} error={values.error.length > 0}
          succeedMessage = { values.message }
          afterSucceedTrigger = {
            () => history.push('/')
          }
        />
      }
    </Root>
  )
}
