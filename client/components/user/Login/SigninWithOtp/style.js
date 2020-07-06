import styled from 'styled-components';
import { leafColor, modalBackground } from '../../../../theme';
import customMedia from '../../../../style/custom-query';

export const Button = styled.button`
  width: 100%;
  height: 40px;
  @media ${customMedia.aboveSmallestPhablet} {
    height: 50px;
  }
  border: none;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: ${leafColor};
  &:active {
    transform: scale(.9)
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${modalBackground};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: ${props => props.fired ? 'visible' : 'hidden'};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;