import styled from 'styled-components';
import { AppbarBg, AppbarFg } from '../../../theme';

export const Tabs = styled.div `
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border-radius: .5rem;
  margin-top: 1rem;
  border: 1px solid #F7F5DD;
`;

export const TabList = styled.ul `
  display: flex;
  list-style: none;
  width: 100%;
  height: 80px;
  align-items: center;
  background: ${AppbarBg};
`;

export const TabName = styled.li `
  height: 100%;
  a {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: #6f6f6f;
    font-size: 1.2rem;
    svg {
      margin-left: .5rem;
    }
  }
  .active {
    background: #fff;
    border-bottom: none;

    svg path{
      stroke: #2ecc71;
    }
    svg g line, svg circle {
      stroke: #2ecc71;
      fill: #2ecc71;
    }
  }
`;