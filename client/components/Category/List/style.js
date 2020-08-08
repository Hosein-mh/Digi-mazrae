import styled from 'styled-components';
import customMedia from '../../../style/custom-query'; 
import { backgroundColor, textColor } from '../../../theme';

export const Root = styled.div `
  float: left;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${backgroundColor};

  @media ${customMedia.aboveSmallestTablet} {
    width: calc(100% - 100px);
    padding: 1rem;
  }
`;

export const Title = styled.h1 `
  color: ${textColor};
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const Table = styled.table `
  width: 100%;
  height: auto;
  background-color: #EFEEEE;
  border-collapse: collapse;
  overflow: auto;
  border-radius: 1rem;
`;

export const Thead = styled.thead ``;
export const Tbody = styled.tbody ``;

export const TableRow = styled.tr `
  width: 100%;
  height: 60px;
  padding: 1rem;
  color: #210606;
  &&.table_head {
    border-radius: 1rem 1rem 0 0;
    background-color: #EE4540;
    color: #fff;
    border: none;
  };
  :last-child {
    border-bottom: none;
  }
  border-bottom: 1px solid #06333E;
`;

export const TableHead = styled.th `
  font-size: .8rem;
  font-weight: 400;

  @media ${customMedia.aboveSmallestTablet} {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const TableDoc = styled.td `
  max-width: 100px;
  overflow: hidden;
  font-size: .8rem;
  text-align: center;
  @media ${customMedia.aboveSmallestTablet} {
    font-size: 1rem;
  }
`;

export const ActionGroup = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  @media ${customMedia.aboveSmallestPhablet} {
    flex-direction: row;
  }
`;

export const PlusIcon = styled.section `
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 7rem;
  left: 1.5rem;
  color: #fff;
  font-size: 1.5rem;
  background-color: #EE4540;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  &:active {
    transform: scale(.8,.8);
  };
  @media ${customMedia.aboveSmallestTablet} {
    bottom: 1.5rem;
    width: 80px;
    height: 80px;
    font-size: 2rem;
  };
  box-shadow: 1px 1px 8px rgba(0,0,0,0.5);
`;