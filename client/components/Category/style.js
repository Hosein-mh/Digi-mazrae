import styled from 'styled-components';
import { AppbarBg } from '../../theme';

export const Root = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${AppbarBg};
`;

export const Row = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &&#firstRow{
    margin-top: 3rem;
  }
`;
