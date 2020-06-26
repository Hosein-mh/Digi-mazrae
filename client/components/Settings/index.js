import React, { Fragment, useState } from 'react'
import { Root, SettingsIcon, SettingModal, ModalTitle } from './style';
import ThemeToggler from '../ThemeToggler';


export default function Settings() {
  const [open, setOpen] = useState(false);
  const dialogHandler = () => {
    setOpen(!open);
  }

  return (
    <Root>
      <SettingsIcon className={open ? 'open' : 'close'} onClick={dialogHandler}>
        <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="222" height="222" viewBox="0 0 222 222">
          <path id="Path_1" data-name="Path 1" d="M103,411,76,438.667l27,28-9,16.667H55.333v37.333H94L103,540,76,566l27,27.333L130.667,566l16.667,8.667V614h39.333V574.667l16-8.667,28.667,27.333L258.667,566l-27.333-30,8-15.333h38V483.333h-38l-8-16.667,27.333-28L231.333,411l-28.667,27.667-16-8V392H147.333v38.667l-16.667,8Z" transform="translate(-55.333 -392)" fill="#0c0c0c"/>
          <circle id="Ellipse_1" data-name="Ellipse 1" cx="32.5" cy="32.5" r="32.5" transform="translate(78.667 78)" fill="#fff"/>
        </svg>
      </SettingsIcon>
      <SettingModal open={open}>
        <ModalTitle>حالت تاریک</ModalTitle>
        <ThemeToggler />
      </SettingModal>
    </Root>
  )
}
