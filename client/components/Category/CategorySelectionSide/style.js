import styled from 'styled-components';
import { AppbarBg, textColor } from '../../../theme';
import customMedia from '../../../style/custom-query';

export const Root = styled.div `
  width: 200px;
  max-height: 250px;
  background: transparent;
  padding: 1rem;
  /* margin-top: 3rem; */
  display: none;

  @media ${customMedia.aboveSmallestTablet} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1840px) {
    position: fixed;
    top: 0;
    left: 0;
  }
  @media ${customMedia.aboveSmallestHd} {
    background: ${AppbarBg};
    left: 5rem;
    height: 100vh;
  }
`;

export const Title = styled.section `
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: ${textColor};
  text-align: center;
`;

export const CatList = styled.ul `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 .5rem;
  margin-top: 1rem;
`;

export const EachCat = styled.li `
  width: 100%;
  height: 50px;
  text-align: center;
  list-style: none;
  & a{
    color: ${textColor};
  }
  & a.active {
    font-weight: bold;
  }
`;