import styled from 'styled-components';
import { AppbarBg, digiText } from '../../theme';

export const CartPage = styled.section `
  padding-top: 48px;
  display: flex;
  justify-content: center;
  background: ${AppbarBg};
  color: #515151;
`;

export const Root = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CartAmountCounter = styled.span `
  width: 20px;
  height: 20px;
  display: inline-block;
  color: #f8f8f8;
  background-color: #999;
  margin-right: 4px;
  border-radius: 50%;
`;

export const CartTabs = styled.div `
  width: 100%;
  height: 35px;
  border-bottom: 1.5px solid #D5D3D3;
  margin-top: 20px;

  && a {
    cursor: pointer;
    text-align: center;
    padding: 8px 24px 10px;
    font-size: 1.071rem;
    user-select: none;
  }
  && a.active {
    color: ${digiText};
    border-bottom: 4px solid ${digiText};
    border-radius: 4px;

    ${CartAmountCounter} {
      background-color: ${digiText};
    }
  }
`;

export const CheckoutItems = styled.ul `
  width: 100%;
  padding: 10px;
  list-style: none;
  background: #fff;
  border: 1px solid #D5D3D3;
  border-radius: 4px;
  margin-top: 20px;
  position: relative;

  &:first-child {
    border-top: none;
  }
`;

export const CheckoutHeader = styled.div `
  width: 100%;
`;

export const CheckoutDeliveryType = styled.span `
    color: #777;
    font-size: 1.071rem;
    line-height: 1.5;
    font-weight: 700;
    margin-right: 8px;

    svg {
      vertical-align: middle;
      margin-left: 4px;
    }
`;

export const CheckoutItemsCount = styled.span `
    color: #777;
    font-weight: 400;
    font-size: .929rem;
    line-height: 1.5;
    margin-right: 8px;
`;
 
export const CheckoutDeliveryPrice = styled.span `
    position: absolute;
    left: 10px;
    color: #777;
    font-size: .929rem;
    line-height: 1.692;
`;