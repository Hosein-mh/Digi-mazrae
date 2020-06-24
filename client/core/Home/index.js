import React from 'react'
import { Root, LandContainer} from './style';
import RootContainer from '../../components/RootContainer';

export default function Home() {
  return (
    <Root>
      <LandContainer>
        <RootContainer>
            <h1>محتوای اصلی</h1>
        </RootContainer>
      </LandContainer>
    </Root>
  )
}
