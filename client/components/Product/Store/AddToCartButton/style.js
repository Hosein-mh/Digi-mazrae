import styled from 'styled-components';
import { AppbarBg } from '../../../../theme';

export const Root = styled.div `
  position: absolute;
  bottom: -30px;
  right: -10px;
`;

export const AddButton = styled.button `
  width: 100px;
  height: 100px;
  background: ${props => props.haveAmount ? "#e74c3c" : "#2ecc71"};
  border: 14px solid ${AppbarBg};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: ${props => props.haveAmount ? '1rem' : '40px'};
  cursor: pointer;
  padding-top: 5px;
  z-index: 40;

  &:active {
    transform: scale(.8);
  }
`;

export const ButtonContent = styled.span `
  width: 100%;
`;

export const SelectItemsContainer = styled.div `
  width: 0;
  height: 90px;
  background: #fff;
  border-top: 1px solid ${AppbarBg};
  border-radius: 0 0 15px 15px;
  position: absolute;
  top: 0;
  right: 10px;
  transition: all 300ms ease-in-out;
  &.show {
    width: 300px;
  }
`;

export const SelectItems = styled.ul `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;
export const ItemOption = styled.li `
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  border-left: 1px solid ${AppbarBg};
  text-align: center;
`;