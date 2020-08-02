import React, { useEffect, useState } from 'react'
import {
  MenuToggle,
} from './style';

export default function index(props) {
  const [checked , setChecked] = useState(props.checked);
  useEffect(() => {
  }, [checked]);

  const toggleCheck = () => {
    setChecked(!checked);
  }
  return (
    <MenuToggle checked={checked} onClick={toggleCheck}>
      <span></span>
      <span></span>
      <span></span>
    </MenuToggle>
  );
};

index.defaultProps = {
  checked: false,
};
