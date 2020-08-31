import styled from 'styled-components';
import { modalBackground } from '../../theme';

export const ShareModal = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 0;
  height: 0;
  z-index: 30;
  border-radius: 0 0 0 10px;
  background-color: ${modalBackground};
  transition: all 300ms ease-in-out;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: 0;
  box-shadow: -3px 2px 3px rgba(0,0,0,0.3);
  overflow-x: hidden;
  &.open {
    opacity: ${props => props.isOpen && 1};
    width: 75px;
    height: 100px;
  }
  button {
    margin: 10px !important;
  }
  svg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const TriggerButton = styled.button `
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;