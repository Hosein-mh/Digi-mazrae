import styled from 'styled-components';
import { AppbarBg, navbarTextColor, mazText } from '../../theme';
import customMedia from '../../style/custom-query';

export const Root = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${AppbarBg};
  width: 100px;
  padding: 1rem;
  height: 100%;
  z-index: 200;
  a {
    color:${navbarTextColor}
  }
  .active {
    transition: all .3s ease-in-out;
    color: ${mazText};
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media ${customMedia.aboveSmallestDesktop} {
    top: 0;
  }

  @media ${customMedia.belowLargestPhablet} {
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100px;
  }
`;

export const MenuItem = styled.section `
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${customMedia.belowLargestPhablet} {
    width: auto;
    transform: scale(.8,.8);
  }
  @media ${customMedia.belowLargestMobile} {
    transform: scale(.6,.6);
  }
`;

export const MenuDesc = styled.section ` 
  @media ${customMedia.belowLargestPhablet} {
    padding-top: 5px;
  }
`;