import styled from 'styled-components';
import customMedia, { size } from '../../../style/custom-query';
import { textColor } from '../../../theme';

export const Root = styled.div `
  width: 100%;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  position: relative;
  padding: 1rem;
  @media ${customMedia.aboveSmallestTablet} {
    width: ${size.mobileMax}px;
    flex-direction: row;
    height: 250px;
  }
  @media ${customMedia.aboveSmallestHd} {
    width: ${size.tabletMax}px;
  }
  @media ${customMedia.belowLargestTablet} {
    max-width: 500px;
  }
`;

export const CategoryCover = styled.img `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  border: none;
  border-radius: 20px;
  object-fit: cover;
`;

export const CoverMask = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  border: none;
  border-radius: 20px;
  background-image: linear-gradient( 109.6deg,  rgba(5,84,94,.9) 50%, rgba(30, 198, 40, 1) 91.1% );
`;

export const CategoryRoundImg = styled.img `
  z-index:10;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #fff;
  &.for-aboove-tablet{
      display: none;
  }
  @media ${customMedia.aboveSmallestTablet} {
    /* width: 200px;
    height: 200px; */
    display: none;
    &.for-aboove-tablet{
      display: inline-block;
    }
  }
`;

export const CategoryTitle = styled.h1 `
  overflow: hidden;
  color: #fff;
  z-index: 10;
  text-align: center;
  text-shadow: 1px 1px 8px rgba(0,0,0,0.6);
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${customMedia.aboveSmallestTablet} {
    width: 33%;
    margin-top: 1rem;
  }
  @media ${customMedia.aboveSmallestHd} {
    font-size: 1.3rem;
  }
`;

export const LeftPart = styled.div `
  display: none;
  width: 33%;

  h1,h2,h3 {
    font-size: .9rem;
  }
  
  @media ${customMedia.aboveSmallestTablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CategoryDesc = styled.section `
  width: 100%;
  max-height: 100px;
  overflow: hidden;
  color: #BBC4BF;
  z-index: 10;
  text-align: center;
  @media ${customMedia.aboveSmallestTablet} {
    margin-top: 1rem;
  }
`;

export const ActionGroup = styled.div `
  width: 200px;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: 1px solid #fff;
  color: ${textColor};
  border-radius: 20px; 
  align-items: center;
  justify-content: center;
  padding: .5rem;
  font-size: .8rem;
  z-index: 20;
  position: relative;
  margin-top: 10px;

  @media ${customMedia.aboveSmallestTablet} {
    max-widtH: 120px;
    height:80px;
  }
  @media ${customMedia.aboveSmallestHd} {
    max-widtH: 200px;
  }
   
  & svg {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
  & svg > g > line {
    stroke: ${textColor};
  }
`;

export const ActionBorder = styled.div `
  width: ${props => props.floatLeft ? '120px' : '80px'};
  height: 45px;
  border-radius: 20px;
  transition: all 300ms ease;
  border: 3px solid #fff;
  position: absolute;
  right: 3px;
  transform: ${props => props.floatLeft && "translateX(-75px)"};

  @media ${customMedia.aboveSmallestTablet} {
    width: ${props => props.floatLeft ? '50px' : '65px'};
    transform: ${props => props.floatLeft && "translateX(-62px)"};
    height: 70px;
  }
  @media ${customMedia.aboveSmallestDesktop} {
    width: ${props => props.floatLeft ? '50px' : '65px'};
    transform: ${props => props.floatLeft && "translateX(-62px)"};
  }
  @media ${customMedia.aboveSmallestHd} {
    width: ${props => props.floatLeft ? '120px' : '80px'};
    transform: ${props => props.floatLeft && "translateX(-72px)"};
  }
`;

export const ActionButton = styled.button `
  background-color: transparent;
  border: none;
  user-select: none;
  color: #fff;
  margin: 0 .7rem;
  cursor: pointer;
  z-index: 20;
  a {
    color: #fff;
  }
  a.active {
    text-shadow: 1px 1px 8px rgba(0,0,0,0.8)
  }
`;

export const ShowMoreButton = styled(ActionButton) `
  border: 1px solid #fff;
  border-radius: 20px;
  padding: .5rem 1rem;
`;

export const SortLabel = styled.label `
  max-width: 100px;
  color: ${textColor};
  font-size: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  text-align: center;
`;

export const FilterName = styled.section `
  border-radius: 20px;
  width: 100px;
  height: 50px;
  overflow: hidden;
  border-radius: 20px;
  background-color: rgba(0,0,0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShareGroup = styled.div `
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 30;
`;
