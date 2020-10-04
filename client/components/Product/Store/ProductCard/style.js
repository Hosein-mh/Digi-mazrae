import styled from 'styled-components';
import { digiText, AppbarBg } from '../../../../theme';

export const Root = styled.article `
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 15px;
  margin: 20px 0;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ProductGallery = styled.div `
  width: 100%;
  .rec-carousel-wrapper {
    position: relative;
  }
  .rec-pagination {
    position: absolute;
    bottom: 10px;
    direction: ltr;
  }
  .rec-dot {
    background-color: #fff;
    box-shadow: 0 0 1px 3px rgba(0, 0, 0, .5);
  }
  .rec-dot_active {
    background-color: rgba(207, 109, 92, 1);
    box-shadow: 0 0 1px 3px rgba(193, 63, 48, 1);
  }
`;

export const ProductImg = styled.img `
  width: 100%;
  height: 280px;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  border-radius: 10px;
`;

export const ProductTitle = styled.h2 `
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #260202;
`

export const ProductPrice = styled.span `
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #474747;
`;

export const Like = styled.div `
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 30;
  padding-top: 5px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
