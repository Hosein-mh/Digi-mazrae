import styled from 'styled-components';
import customMedia from '../../../../style/custom-query';

export const Root = styled.div `
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;

  @media ${customMedia.aboveSmallestTablet} {
    width: 300px;
  }

  .cisRTL:hover, .cisRTL:focus {
    cursor: pointer;
    box-shadow: 0 0 1px 3px rgba(103,58,58,1);
  }
  .cisRTL {
    box-shadow: 0 0 1px 3px rgba(203, 21, 21, 1);
    background-color: rgba(203, 21, 21, .5);
  }
  /* .rec-pagination {
    align-self: flex-end;
  } */
`;

export const FloatButton = styled.div `
  width: 20px;
  height: 20px;
  position: absolute;
  top: -40px;
  /* bottom: 50px;
  left: calc(50% - 50px); */
  text-align: center;
  z-index: 10;
`;

export const Label = styled.label `
  height: 100%;
  width: 100%;
  padding: 2.5px 0 0 0;
  background-color: #EC7777;
  /* position: absolute;
  bottom: -1rem;
  right: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;
