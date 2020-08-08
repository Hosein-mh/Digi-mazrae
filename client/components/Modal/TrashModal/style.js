import styled from 'styled-components';
import { modalBackground, modalErrorBorder, mazText } from '../../../theme';
import customMedia from '../../../style/custom-query';

export const Root = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTrigger = styled.button `
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    transform: scale(.7,.7);
  }
`;

export const Modal = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${modalBackground};
  border: 3px solid ${modalErrorBorder};
  border-radius: 5px;
  z-index: 300;

  @media ${customMedia.aboveSmallestTablet} {
    width: 400px;
    height: 400px;
    top: calc(50% - 200px);
    bottom: calc(50% - 200px);
    right: calc(50% - 200px);
    left: calc(50% - 200px);
  }
`;

export const ModalTitle = styled.section `
    width: 80%;
    text-align: center;
    color: ${mazText};
    font-size: 1.2rem;
`;

export const ActionGroup = styled.section `
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const ActionButton = styled.button `
  min-width: 120px;
  height: 60px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  &:active {
    transform: scale(.8,.8);
  }
`;

export const ApproveButton = styled(ActionButton) `
  background-color: #2ecc71;
  color: #fff;
`;

export const CancleButton = styled(ActionButton) `
  background-color: #e74c3c;
  color: #fff;
`;

export const Item = styled.span `
  font-size: 1.1rem;
  color: ${modalErrorBorder}
`;

