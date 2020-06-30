import React from 'react'
import { Root, LandContainer, LandRoot, Title, SubTitle, Carousel } from './style';
import RootContainer from '../RootContainer';
import Search from './Search';
import CategoriesCarousel from '../CategoriesCarousel';

export default function HomeLandingPage() {
  return (
    <Root>
      <LandContainer>
        <RootContainer>
          <LandRoot>
            <Title>سفارش آنلاین خشکبار و سبزیجات</Title>
            <SubTitle>ما براتون خشکبار وسبزیجات خوشمزه و سالم میفرستیم</SubTitle>
            <Search />
            <CategoriesCarousel />
          </LandRoot>   
        </RootContainer>
      </LandContainer>
    </Root>
  )
}
