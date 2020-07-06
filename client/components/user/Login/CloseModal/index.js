import React from 'react'
import PropTypes from 'prop-types';
import { CloseButton } from './style';

export default function index(props) {
  return (
    <CloseButton onClick={props.closeHandler}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25.657" height="25.657" viewBox="0 0 25.657 25.657">
        <g id="closeIcon" transform="translate(2.828 2.828)">
          <line id="Line_1" data-name="Line 1" x1="20" y2="20" fill="none" stroke="#d92027" strokeLinecap="round" strokeWidth="4"/>
          <line id="Line_2" data-name="Line 2" x2="20" y2="20" fill="none" stroke="#d92027" strokeLinecap="round" strokeWidth="4"/>
        </g>
      </svg>
    </CloseButton>
  )
}

index.proptypes = {
  closeHandler: PropTypes.func.isRequired,
}
