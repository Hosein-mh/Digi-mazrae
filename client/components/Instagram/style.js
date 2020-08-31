import styled from 'styled-components';
import customMedia from '../../style/custom-query';

export const Root = styled.div `
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 20px;

  @media ${customMedia.belowLargestTablet} {
    display: none;
  }
`;