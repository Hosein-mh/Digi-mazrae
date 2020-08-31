import ArrowUpIcon from '../icons/ArrowUp.icon';
import { Button } from './style';

import React, { useState } from 'react';
const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <Button className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
      <ArrowUpIcon />
    </Button>
  );
}

export default ScrollArrow;