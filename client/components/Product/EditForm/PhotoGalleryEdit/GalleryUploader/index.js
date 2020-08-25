import React, { useEffect } from 'react';
import uniqid from 'uniqid';
import {
  Root,
  Label,
  ActionGroupController,
  ChangeActionController,
  DeleteActionController,
} from './style';
import PropTypes from 'prop-types';

export default function index({ photoSrc, changeTrigger, removeTrigger }) {
  const id = uniqid();
  useEffect(() => {
  }, [photoSrc])

  return (
    <Root photoSrc={photoSrc} >
      <input type='file'
        style={{display: "none"}}
        onChange={changeTrigger(photoSrc)}
        id={id}
      />
          <ActionGroupController>
            <Label htmlFor={id}>
              <ChangeActionController>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.188" height="14.456" viewBox="0 0 18.188 14.456">
                  <g id="goandreturn" transform="translate(0.447 0.894)">
                    <path id="Path_12" data-name="Path 12" d="M93.706,11H111l-9.333-4.667" transform="translate(-93.706 -6.333)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                    <path id="Path_13" data-name="Path 13" d="M93.706,11H111l-9.333-4.667" transform="translate(111 19) rotate(180)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2"/>
                  </g>
                </svg>
              </ChangeActionController>
            </Label>
            <DeleteActionController
              onClick={removeTrigger(photoSrc)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16.828" height="16.828" viewBox="0 0 16.828 16.828">
                <g id="multy-icon" transform="translate(1.414 1.414)">
                  <line id="Line_2" data-name="Line 2" x2="14" y2="14" fill="none" stroke="#fcfcfc" strokeLinecap="round" strokeWidth="2"/>
                  <line id="Line_3" data-name="Line 3" x1="14" y2="14" fill="none" stroke="#fcfcfc" strokeLinecap="round" strokeWidth="2"/>
                </g>
              </svg>
            </DeleteActionController>
          </ActionGroupController> 
    </Root>
  );
};

index.propTypes = {
  photoSrc: PropTypes.string,
  changeTrigger: PropTypes.func.isRequired,
  removeTrigger: PropTypes.func.isRequired,
};