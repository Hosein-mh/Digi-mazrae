import React from 'react'
import { Root, Title, Background, } from './style';
import { useHistory } from 'react-router';

export default function CategoryBanner({ category }) {
  let history = useHistory();
  
  return (
    <Root onClick={() => history.push(`/categories/${category._id}`)} imageSrc={category.photo}>
      <Background src={category.photo} />
      <Title>{category.name}</Title>
    </Root>
  )
}
