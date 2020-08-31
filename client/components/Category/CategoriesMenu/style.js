import styled from 'styled-components';
import customMedia from '../../../style/custom-query';
import { AppbarBg, modalBackground, textColor } from '../../../theme';

export const Root = styled.div `
  @media ${customMedia.aboveSmallestTablet} {
    display: none;
  }
`;

export const NavIcon = styled.div `
  svg {
    width: 30px;
    height: 30px;
  }
  svg > g > line {
    stroke: #fff;
  }

  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
`;

export const CatModal = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  z-index: 30;
  border-radius: 0 0 10px 0;
  background-color: ${modalBackground};
  transition: all 300ms ease-in-out;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: 0;
  box-shadow: 3px 2px 3px rgba(0,0,0,0.3);
  overflow-x: hidden;
  &.open {
    opacity: ${props => props.isOpen && 1};
    width: 150px;
    height: 200px;
  }
  button {
    margin: 10px !important;
  }
`;

export const CategoryList = styled.ul `
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const EachCategory = styled.li `
  width: 100%;
  text-align: center;
  padding: 2.5px 0;
  color: ${textColor};
  list-style: none;
  &.active {
    font-weight: bold;
    border-bottom: 1px solid ${textColor};
  }
  a {
    color: ${textColor};
  }
`;