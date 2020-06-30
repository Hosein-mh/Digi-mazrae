import React from 'react'
import Carousel from './carousel';
import CategoryBanner from '../CategoryBanner';

export default function index() {
  return (
      <Carousel title="Carousel">
          {/* <Item img="https://unsplash.it/475/205" />
          <Item img="https://unsplash.it/476/205" />
          <Item img="https://unsplash.it/477/205" />
          <Item img="https://unsplash.it/478/205" />
          <Item img="https://unsplash.it/479/205" /> */}
          <CategoryBanner />
          <CategoryBanner />
          <CategoryBanner />
      </Carousel>
  )
}
