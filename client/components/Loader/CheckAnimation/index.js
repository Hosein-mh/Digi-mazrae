import React from 'react'
import { SuccessCheckmark, Message, Container, ActionButton } from './style';
import PropTypes from 'prop-types';

export default function index({completed, message}) {
  return (
    <SuccessCheckmark completed={completed}>
      <Container>
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
        <Message>{message}</Message>
        <ActionButton>ورود</ActionButton>
      </Container>
    </SuccessCheckmark>
  )
}

index.prototype = {
  completed: PropTypes.bool,
  message: PropTypes.string
}
index.defaultProps = {
  completed: false,
  message: ''
}
