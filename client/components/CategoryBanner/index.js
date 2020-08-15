import React from 'react'
import { Root, Title } from './style';
    
export default function CategoryBanner({ category }) {
  return (
    <Root imageSrc={category.photo}>
      <Title>{category.name}</Title>
    </Root>
  )
}
