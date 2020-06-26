import React from 'react'
import { Root, LandContainer, LandRoot, Title, SubTitle } from './style';
import RootContainer from '../RootContainer';
import Search from './Search';

export default function HomeLandingPage() {
  return (
    <Root>
      <LandContainer>
        <RootContainer>
          <LandRoot>
            <Title>سفارش آنلاین خشکبار و سبزیجات</Title>
            <SubTitle>ما براتون خشکبار وسبزیجات خوشمزه و سالم میفرستیم</SubTitle>
            <Search />
          </LandRoot>   
        </RootContainer>
      </LandContainer>
    </Root>
  )
}
