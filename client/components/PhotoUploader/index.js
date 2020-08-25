import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import {
  Root,
  Plus,
  Img,
  Label,
  Notif,
} from './style';
import PropTypes from 'prop-types';

export default function index({ photoSrc, changeTrigger }) {
  const id = uniqid();
  useEffect(() => {
  }, [photoSrc])

  return (
    <Root>
      <input type='file'
        style={{display: "none"}}
        onChange={changeTrigger}
        id={id}
      />
        <Label htmlFor={id}>
          {
            photoSrc ? 
            <>
            <Img src={`/${photoSrc}`} />
            <Notif>تغییر تصویر</Notif> 
            </>:
            <Plus>+</Plus>
          }
        </Label>
    </Root>
  );
};

index.propTypes = {
  photoSrc: PropTypes.string,
  changeTrigger: PropTypes.func.isRequired,
};