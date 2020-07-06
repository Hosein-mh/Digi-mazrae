import styled from 'styled-components';
import { digiText } from '../../../../theme';
import customMedia from '../../../../style/custom-query';

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  margin: 1rem;
  cursor: pointer;
  &&:active {
    transform: scale(.8);
  }
  && svg {
    width: 20px;
    height: 20px;
  }
  && svg line {
    stroke: ${digiText};
  }
`;