import styled from 'styled-components';
import { textColor } from '../../../theme';
import customMedia from "../../../style/custom-query";


export const Root = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;

  && svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  && path {
    stroke: ${textColor};
  }

  @media ${customMedia.belowLargestPhablet} {
    position: fixed;
    right: 0;
    bottom: 100px;
  }
`;

export const PageSwapper = styled.section `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 200px;
  overflow: hidden;
`;

export const Swap = styled.section `
  transition: all .5s ease;
  display: flex;
  transform:
    translateX(${props => props.page && props.pages && ((props.page - 1) / props.pages * 100)}%);
`;



export const PageIndex = styled.section `
  z-index: 100;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem .4rem;
  font-size: .8rem;
  padding: 1rem;
  background: #ECF0F1;
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s ease;

  &&.active {
    background-color: #EE4540;
    color: #fff;
  }
`;