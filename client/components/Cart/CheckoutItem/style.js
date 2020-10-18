import styled from 'styled-components';

export const Root = styled.li `
  border-top: 1px solid #eaeaea;

  &:nth-child(2) {
    border-top: none;
  }
`;

export const CartItem = styled.div `
  width: 100%;
  display: flex;
  margin-top: 1rem;
`;

export const CartItemThumb = styled.div `
  width: 20%;
  min-width: 124px;
  user-select: none;

  && a {
    width: 100%;
    display: block;
    min-height: 100px;
    text-align: center;
    position: relative;
  }

  && > a > img {
    min-height: 100px;
    min-width: 100px;
    max-width: 100%;
    max-height: 140px;
    overflow: hidden;
    border-style: none;
  }
`;

export const CartItemInfo = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CartItemTitle = styled.p `
  font-size: 1.143rem;
  line-height: 1.375;
  color: #3f3f3f;
  text-align: right;
  margin: 10px 5px 6px;
  width: 100%;
`;

export const CartItemRow = styled.div `
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityOptions = styled.div `
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

export const CartItemRemove = styled.div `
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  font-size: .8rem;
  svg {
    width: 20px;
    height: 20px;
    margin-left: 2px;
  }
`;

export const CartItemStatus = styled.div `
  margin-right: 10px;
  color: #0fabc6;
  font-size: .9rem;
`;

export const CartItemPrice = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-size: 1.3rem;
  line-height: 1.294;

  && span {
    font-size: .9rem;
  }
`;