import styled from 'styled-components';
import { AppbarBg, mazText, digiText } from '../../theme';

export const Root = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${AppbarBg};
`;

export const Container = styled.div `
  width: 100%;
  margin: 45px auto 0 auto;
  padding: 0 15px;
`;

export const NavContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.div `
  display: flex;
  align-items: center;
  margin: 15px 0;

  a {
    color: ${mazText};
    font-size: .8rem;
    &:hover {
      color: ${digiText};
    };
  }

  #each {
    &::before {
      content: "/";
      color: ${mazText};
      letter-spacing: .4px;
      font-size: 13px;
      margin-left: 5px;
      padding-right: 5px;
      font-weight: 400!important;
    }
  }
`;

export const ProductArticle = styled.article `
  background-color: #fff;
  box-shadow: 0 12px 12px 0 hsla(0,0%, 71%, .11);
  border: 1px solid #e4e4e4;
  display: flex;
  width: 100%;
`;

export const ProductContent = styled.div `
  display: flex;
  flex-direction: column;
  flex: 2;
  padding: 1rem 1.5rem;
`;

export const ProductHead = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &&:after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${AppbarBg};
    position: absolute;
    bottom: -5px;
    right: 0;
  }
`;

export const ProductTitle = styled.p `
  font-size: 1.5rem;
  color: #000;
  font-weight: 700;
  text-align: center;
`;

export const ProductInfo = styled.div `
  display: flex;
`;

export const ProductParams = styled.div `
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  max-height: 200px;
  overflow: hidden;

  #data-title {
    color: #55565a;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export const ParamsTitle = styled.ul `

`;
export const ParamsItem = styled.li `

`;

export const ProductConfig = styled.div `
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  color: gray;
`;

export const ProductCategory = styled.div `
  font-size: 1rem;

  a {
    color: #00bfd6;
    border-bottom: 1.5px dotted #00bfd6;
  }
`;

export const AddsInfo = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${AppbarBg};
  border: 1px solid #e4e4e4;
  margin: 1rem;
  border-radius: 4px;
  padding: 4px 8px;
`;

export const Quality = styled.div `
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color:#707070;
  padding: 1rem;
  span {
    margin: 0 4px;
    text-align: center;
  }
  border-bottom: 1px solid #e4e4e4;
`;


export const PriceArea = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color:#707070;

  span {
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 4px;
  }
`;

export const Price = styled.div `
  align-self: flex-end;
  color: ${digiText};
  font-size: 1.5rem;
  font-weight: 600;

  span {
    font-size: .8rem;
  }
`

export const BasketAndAmount = styled.div `
  width: 100%;
  position: relative;
`;

export const Quantity = styled.div `
  display: flex;
  align-items: center;

  #describe {
    margin-right: 4px;
    font-size: .9rem;
    color: #0fabc6;
  }
`

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

export const AddToBasketButton = styled.button `
  width: 100%;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  background: ${digiText};
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer; 
`;

export const ErrorContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  font-size: 1.2rem;
  color: ${digiText};
`;