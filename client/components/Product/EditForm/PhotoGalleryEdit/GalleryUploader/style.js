import styled from 'styled-components';
import { modalBorderColor } from '../../../../../theme';

export const Root = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  background: ${props => props.photoSrc && `url("/${props.photoSrc}") center center`};
  background-size: cover;
  border: 1px solid ${modalBorderColor};
  position: relative;
  border-radius: 5px;
`;

export const ActionGroupController = styled.div `
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 5px;
  right: 0;
`;

export const ChangeActionController = styled.section `
  width: 50px;
  height: 50px;
  background: rgba(12,15,12,0.6);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DeleteActionController = styled.section `
  width: 50px;
  height: 50px;
  background: #CB1515;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Label = styled.label `
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`
