import styled from 'styled-components';

export const Root = styled.li `
  position: relative;
  &:last-child a {
    border: none;
  }
  a {
    border: none;
    padding: 15px 0;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid #f0f0f1;
    margin: 0 12px;
    color: #4a5f73;
    background-color: transparent;
  }
  .cart_Item-Link {
    position: relative;
  }
`;

export const CartItemImage = styled.div `
  width: 75px;
  height: 75px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 75px;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    border-style: none;
  }
  img, img[alt] {
    line-height: 22px;
  }
`;

export const CartItemContent = styled.div `
  margin-right: 8px;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const ItemTitle = styled.p `
  font-size: .857rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #424750;
`;

export const ItemShipingType = styled.p `
  display: flex;
  align-items: center;
  span {
    font-size: .8rem;
    color: #0fabc6;
    margin-right: 8px;
  }
`;

export const CartItemFooter = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 100px);
  position: absolute;
  bottom: 20px;
  left: 0;

  && svg {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

export const ItemProp = styled.div `
  color: #81858b;
  display: flex;
  align-items: center;
  font-size: 0.714rem;
`;

export const ItemTrash = styled.span `
  cursor: pointer;
`;
