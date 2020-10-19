import styled from 'styled-components';
import { digiText, mazText } from '../../../theme';

export const Root = styled.div `
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #707070;
  border-radius: 8px;
  color: #0fabc6;
  user-select: none;
  padding: 0 10px;
  font-size: 1.3rem;
`;

export const Selector = styled.span `
  cursor: pointer;
  color: #2ecc71;
  font-size: 2rem;
  height: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
`;

export const Minus = styled.span `
  width: 18px;
  height: 3px;
  background: ${digiText};
`;