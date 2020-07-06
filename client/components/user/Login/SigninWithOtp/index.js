import React, { Fragment, useState, useRef } from 'react';
import { Button, Card } from './style';
import { Error } from '../style';
import Input from '../Input';
import CloseModal from '../CloseModal';
import SimpleReactValidator from 'simple-react-validator';

export default function index() {
  const [openModal , setOpenModal] = useState(false);
  const [mobile, setMobile] = useState('');
  const simpleValidator = useRef(new SimpleReactValidator({
    messages: {
      phone: 'شماره همراه وارد شده صحیح نیست',
    },
    element: (message) => <Error>{message}</Error>,
  }));

  return (
    <Fragment>
      <Button onClick={() => setOpenModal(true)}>ورود با شماره همراه</Button>
      <Card fired={openModal}>
        <CloseModal closeHandler={() => setOpenModal(false)} />
        <Input 
          type='text'
          name='mobile' required
          holder='شماره همراه'
          value={mobile}
          onChange={(e) => {setMobile(e.target.value)}}
          onBlur={simpleValidator.current.showMessageFor('mobile')}
          validation={simpleValidator.current.message('mobile', mobile, 'phone')}
        />
      </Card>
    </Fragment>
  )
}
