import styled from 'styled-components';
import { digiText } from '../../theme';

export const CartInfo = styled.div `
    display: none;
    position: absolute;
    left: 0;
    top: calc(100% - 3px);
    width: 300px;
    background: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0 4px 12px 0 rgba(0,0,0,.2);
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.2);
    z-index: 4;
`;

export const CartInfoHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 12px;
  font-size: 1.2rem;
  border-bottom: 1px solid #f0f0f1;

  && a {
    font-weight: 700;
    display: flex;
    align-items: center;
    font-size: .9rem;
    color: #0fabc6;
  }
`;

export const CartInfoHeaderCount = styled.div `
  font-size: 0.9rem;
  color: #81858b;
`;

export const CartBasketList = styled.ul `
  max-height: 293px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  border-bottom: 1px solid #f0f0f1;
`;

export const Root = styled.div `
  position: relative;
  margin-right: 1rem;
  &:hover {
    ${CartInfo} {
      display: ${props => props.hasAmount ? 'block' : 'none'};
    }
  }
`;

export const CartAmount = styled.span `
  font-size: 0.8rem;
  color: #fff;
  width: 25px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  border-radius: 8px;
  font-weight: 900;
  border: 2px solid #fff;
  position: absolute;
  bottom: -6px;
  right: -9px;
  background: ${digiText};
  visibility: ${props => props.show ? "visible" : "hidden"};
`;

export const CartInfoFooter = styled.div `
  padding: 8px;
  border-top: 1px solid #f0f0f1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & .cart_info-submit {
    background-color: #e74c3c;
    display: block;
    font-size: 1rem;
    line-height: 26px;
    letter-spacing: -.5px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    padding: 9px 20px 10px;
    border: none;
    border-radius: 8px;
  }
`;

export const CartInfoTotal = styled.div `
  font-size: 0.857rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 4px;
`;

export const CartInfoTotalText = styled.span `
  margin-bottom: 4px;
  font-size: 0.714rem;
  line-height: 2.2;
`;

export const CartInfoTotalAmount = styled.p `
  font-size: 0.714rem;
  font-weight: 700;
`;

export const CartInfoTotalNumber = styled.span `
  font-size: 1.143rem;
`;