import React from 'react'
import ErrorIconSvg from '../../icons/ErrorIcon';
import {
  Root,
  Message,
  Button,
} from './style';

export default function index({message, refreshStateTrigger}) {
  return (
    <Root>
      <ErrorIconSvg />
      <Message>
        {message}
      </Message>
      <Button onClick={refreshStateTrigger}>بازگشت</Button>
    </Root>
  )
}
