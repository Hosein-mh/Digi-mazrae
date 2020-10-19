import React, { useState } from 'react';
import HeartIcon from '../../../icons/Heart.icon';
import HeartFilledIcon from '../../../icons/Heart.filled.icon';
import {
  Root,
  Guide,
} from './style';
import { digiText } from '../../../../theme';

export default function AddToLikes() {
  const [active, setActive] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  return (
    <Root
      className={active ? 'active' : 'noActive'}
      onClick={() => setActive(!active)}
      onMouseEnter={() => {setShowGuide(true)}}
      onMouseLeave={() => {setShowGuide(false)}}
    >
      <div id="heart">
      {
        !active ?
        <HeartIcon />:
        <HeartFilledIcon/>
      }
      </div>
      {
        showGuide &&
        <Guide show={showGuide} className={showGuide && 'show'}>افزودن به لیست علاقه مندی</Guide>
      }
    </Root>
  )
}
