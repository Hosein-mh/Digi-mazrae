import React, { useEffect } from 'react'
import {
  Root,
  Plus,
  Img,
  Label,
  Notif,
} from './style';
import PropTypes from 'prop-types';

export default function index({ photoSrc, changeTrigger }) {

  useEffect(() => {
  }, [photoSrc])

  return (
    <Root src={photoSrc}>
      <input type='file'
        style={{display: "none"}}
        onChange={changeTrigger}
        id="photoUploader"
      />
      {
        photoSrc ?
        <Label htmlFor="photoUploader">
          <Img src={`/${photoSrc}`} htmlFor="photoUploader" />
          <Notif>تغییر تصویر</Notif>
        </Label> :
        <Plus>+</Plus>
      }
    </Root>
  );
};

index.propTypes = {
  photoSrc: PropTypes.string,
  changeTrigger: PropTypes.func.isRequired,
};