import styled from 'styled-components';
import { modalBorderColor } from '../../theme';

export const Root = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 2rem; */
`;

export const Contents = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Plus = styled.span `
  width: 100%;
  height: 100%;
  min-height: 150px;
  font-size: 4rem;
  font-weight: 200;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #EC7777;
  border-radius: 5px;
  cursor: pointer;
  &&.hide {
    display: none;
  }
`;

export const Notif = styled.section `
  width: 100%;
  height: 50px;
  background: rgba(12,15,12,0.6);
  color: #fff;
  position: absolute;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label `
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid ${modalBorderColor};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover, &:active {
    ${Notif} {
    transform: translateY(-50px);
    }
  }
`

export const Img = styled.img `
  width: 100%;
  height: 100%;
`;
