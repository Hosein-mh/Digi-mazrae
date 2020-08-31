import styled from 'styled-components';
import { textColor } from '../../../theme';
import customMedia from '../../../style/custom-query';

export const Root = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  color: ${textColor};
  .image {
    text-align: center;
  }
`;

export const Content = styled.article `
  width: 100%;
  height: 100%;
  text-align: center;
  overflow-x: hidden;
  @media ${customMedia.aboveSmallestDesktop} {
    text-align: start;
  }
`;