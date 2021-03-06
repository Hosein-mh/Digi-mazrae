import React, { useState } from 'react'
import { Root, SearchInput, Placeholder, SearchIcon } from './style';

export default function Search() {
  return (
    <Root>
      <SearchInput type="text" id='search' required/>
      <Placeholder htmlFor='search' >نام محصول، دسته بندی</Placeholder>
      <SearchIcon>
      <svg id="search" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
        <path id="Path_3" data-name="Path 3" d="M10.5,20.59A10.295,10.295,0,1,1,20.8,10.295,10.31,10.31,0,0,1,10.5,20.59Zm0-18.638a8.343,8.343,0,1,0,8.35,8.343A8.356,8.356,0,0,0,10.5,1.952ZM24.91,24.714a.975.975,0,0,0,0-1.38l-4.37-4.367a.976.976,0,1,0-1.381,1.38l4.37,4.367a.977.977,0,0,0,1.381,0Z" transform="translate(-0.196)" fill="#fff"/>
      </svg>
      </SearchIcon>
    </Root>
  )
}
