import styled from 'styled-components';
import { modalBackground } from '../../../../theme';
import customMedia from '../../../../style/custom-query'; 

export const Card = styled.div `
  width: 180px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 1px 2px 5px rgba(6, 51, 62, 0.2);
  margin-bottom: 1rem;
`;

export const Tank = styled.section `
  position: absolute;
  top: 0;
  right: 0;
  color: #06333E;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${modalBackground};
  padding: 1rem 0.5rem;
  border-radius: 0 0 1rem 1rem;
`;


export const StatusLight = styled.span `
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 10px;
  height: 10px;
  background: ${props => props.active ? "#67FF80" : "#EC7777"};
  border-radius: 50%;
`;

export const ProductPhoto = styled.img `
  width: 140px;
  height: 140px;
  border: 1px solid rgba(6, 51, 62, 0.7);
  border-radius: 5px;
  margin-top: 20px;
`;

export const ProductName = styled.h3 `
  height: 50px;
  overflow: hidden;
  text-align: center;
  font-size: 1rem;
  color: #06333E;
  margin: 12px 0;
  z-index: 10;
`;

export const RateAndPrice = styled.section `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const RateAndPriceBg = styled.div `
  width: 90%;
  min-height: 50px;
  position: absolute;
  left: 0;
  background: ${modalBackground};
  border-radius: 0 1rem 1rem 0;
`;
export const ProductPrice = styled.section `
  font-size: 1rem;
  color: #3E1212;
  z-index: 10;
`;

export const ActionGroup = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  margin-top: 12px;
`;
