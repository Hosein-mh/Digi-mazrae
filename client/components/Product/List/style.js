import styled from 'styled-components';
import customMedia from '../../../style/custom-query'; 
import { backgroundColor, textColor, modalBackground } from '../../../theme';

export const Root = styled.div `
  float: left;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${backgroundColor};
  margin-bottom: 150px;

  @media ${customMedia.aboveSmallestTablet} {
    width: calc(100% - 100px);
    padding: 1rem;
    margin: 0;
  }
`;

export const Title = styled.h1 `
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  background: ${modalBackground};
  color: ${textColor};
  font-size: 1.2rem;
  margin: 10px 0;
  position: sticky;
  top: 0;
  z-index: 300;
`;

export const ProductContainer = styled.div `
  width: 100%;
  padding: 1rem;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PlusIcon = styled.section `
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 7rem;
  left: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  background-color: #EE4540;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  z-index: 300;
  &:active {
    transform: scale(.8,.8);
  };
  @media ${customMedia.aboveSmallestTablet} {
    bottom: 1.5rem;
    width: 80px;
    height: 80px;
    font-size: 2rem;
  };
  box-shadow: 1px 1px 8px rgba(0,0,0,0.5);
`;