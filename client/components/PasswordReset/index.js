import React, { useRef, useState } from 'react'
import { Root, ResetPasswordForm, Title, Error, Button } from './style'
import Input from '../Input';
import SimpleReactValidator from 'simple-react-validator';
import fetchHelper from '../../utils/api-helpers/fetch-helper';
import Loader from '../Loader';
import { useHistory } from 'react-router';

export default function index({ match }) {
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      required: 'این فیلد نمی تواند خالی بماند',
      min: 'این فیلد نمی تواند کمتر از 6 کاراکتر باشد'
    },
    element: (message) => <Error>{message}</Error>,
  }));
  const history = useHistory();

  const [values, setValues] = useState({
    password: '',
    password_confirm: '',
    loading: false,
    error: '',
    succeed: false,
    message: '',
  });

  const handleInputChange = (name) => (e) => {
    setValues({
      ...values,
      [name]: e.target.value,
    });
  }

  const handleSubmit = async () => {
    setValues({ ...values, loading: true });
    const {userId, token} = match.params;
    const url = `/reset_password/recieve_new_password/${userId}/${token}`;
    const configs = {
      method: 'POST',
      body: JSON.stringify({
        password: values.password,
      }),
    };
    let resp = await fetchHelper(fetch, url, configs);
    
    if (resp.ok && resp.status == 200) {
      setValues({ ...values, succeed: true, loading: false, error: '', message: resp.data.message });
    } else if (!resp.ok) {
      setValues({ ...values, succeed: false, loading: false, error: resp.data.error, message: ''});
    } else {
      setValues({ ...values, succeed: false, loading: false, error: 'تاریخ درخواست یا لینک درخواست منقضی شده.', message: ''})
    }
  }

  const disableSubmitButton = () => {
    return (
      values.password === values.password_confirm &&
      values.password.length > 0 &&
      simpleValidator.current.allValid()
    ) ?
    false :
    true;
  }
  const resetState = () => {
    setValues({
      password: '',
      password_confirm: '',
      loading: false,
      error: '',
      succeed: false,
      message: '',
    });
  }

  return (
    <Root>
      <ResetPasswordForm>
        <Title>
          لطفا رمز عبور جدید را وارد نمایید
        </Title>
        <Input
          id="pass"
          type="password" required
          value={values.password}
          onChange={handleInputChange('password')}
          onBlur={simpleValidator.current.showMessageFor('pass')}
          holder="رمز عبور"
          validation={simpleValidator.current.message('password', values.password, 'min:6')}
        />
        <Input
          id="password_confirm"
          type="password" required
          value={values.password_confirm}
          onChange={handleInputChange('password_confirm')}
          onBlur={simpleValidator.current.showMessageFor('password_confirm')}
          holder="تکرار رمز عبور"
          validation={simpleValidator.current.message('password', values.password_confirm, 'min:6')}
        />
        {
        values.password !== values.password_confirm &&
        <Error>رمز عبور با تکرار آن همخوانی ندارد</Error>
        }
        <Button onClick={handleSubmit} disabled={disableSubmitButton()}>تایید پسورد جدید</Button>
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
      </ResetPasswordForm>
    </Root>
  )
}
