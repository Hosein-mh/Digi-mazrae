import styled from 'styled-components';
import { AppbarBg, digiText } from '../../../theme';

export const Root = styled.section `
  max-width: 100%;
  margin-top: 1rem;
  background-color: #fff;
  border-radius: .5rem;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
`;

export const HeadLine = styled.div `
  width: 100%;
  padding: 1rem;
`;

export const HeadTitle = styled.span `
  padding: 8px 0;
  position: relative;
  min-height: 50px;
  font-size: 1.3rem;
  display: flex;


  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: calc(100% - 210px);
    height: 1px;
    background-color: ${AppbarBg};
    bottom: 0;
    z-index: 1;
  }
  &::before {
    content: "";
    width: 180px;
    position: absolute;
    right: 0;
    left: -40px;
    bottom: 0;
    background-color: ${digiText};
    height: 1px;
    z-index: 1;
  }
`;