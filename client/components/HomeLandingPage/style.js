import styled from 'styled-components';
import customMedia from '../../style/custom-query';
import {backgroundColor, textColor, dimensions} from './../../theme';
import landingPageBg from '../../assets/images/landingPageBg.jpg';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  color: #fff;
  background: url(${landingPageBg}) center no-repeat;
  background-position: center;
  background-size: cover;
  @media ${customMedia.aboveSmallestPhablet} {
    height: 600px;
  }
  @media ${customMedia.aboveSmallestDesktop} {
    height: 800px;
  }
`;

const LandContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const LandRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 200;
  color: white;
  line-height: 3rem;
`;

const Title = styled.h1`
  font-weight: 400;

  @media ${customMedia.aboveSmallestPhablet} {
    font-size: 1.8rem;
  }
  @media ${customMedia.belowLargestMobile} {
    font-size: 1.3rem;
  }
  @media ${customMedia.aboveSmallestDesktop} {
    margin-top: 15.5rem;
  }
`;

const SubTitle = styled.h2`
  font-weight: 200;
  font-size: 1.5rem;

  @media ${customMedia.aboveSmallestPhablet} {
    font-size: 1.3rem;
  }
  @media ${customMedia.belowLargestMobile} {
    font-size: 1rem;
  }
`;

const Carousel = styled.div`
  position: absolute;
  bottom: -100px;
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  
  @media ${customMedia.aboveSmallestDesktop} {
    bottom: -200px;
  }
`;

export {
  Root,
  LandContainer,
  LandRoot,
  Title,
  SubTitle,
  Carousel,
}

