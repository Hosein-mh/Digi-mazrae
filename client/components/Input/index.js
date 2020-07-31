import React from 'react';
import PropTypes from 'prop-types';
import { FieldInput, Input, Placeholder } from './style';

export default function Index(props) {
  return (
    <FieldInput>
      <Input {...props} />
      {props.validation}
      <Placeholder htmlFor={props.id}>{props.holder}</Placeholder>
    </FieldInput>
  )
}

Index.prototype = {
  validation: PropTypes.bool,
  holder: PropTypes.string
};

Index.defaultProps = {
  validation: true,
}
