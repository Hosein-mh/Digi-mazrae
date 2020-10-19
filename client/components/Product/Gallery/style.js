import styled from 'styled-components';
import { AppbarBg, digiText } from '../../../theme';

export const Root = styled.section `
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-left: 2px solid ${AppbarBg};
  position: relative;

  .rec-dot:hover {
    box-shadow: 0 0 1px 3px rgba(183,10,25,.5);
  }

  .rec-dot_active {
    box-shadow: 0 0 1px 3px rgba(183,10,25,1);
    background-color: rgba(183,10,25,.5);
  }
`;

export const SelectedViewer = styled.div `
  width: 100%;
  height: auto;
  min-width: 350px;
  min-height: 350px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.imageSrc && `url(/${props.imageSrc})`};
  overflow: hidden;
  border-radius: 4px;

`;

export const Thumb = styled.div `
  transition: all .15s ease-in-out;
  width: 100px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.imageSrc && `url(/${props.imageSrc})`};
  cursor: pointer;
  margin: 2px;
  border: ${props => props.isSelected ? `2px solid rgba(183,10,25,1)` : "none"};
  border-radius: 4px;
`;

export const ExtraOptions = styled.div `
  width: 50px;
  height: 100px;
  position: absolute;
  top: 4px;
  left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,0.7);
  padding: 10px 0;
  border-radius: 4px 0 4px 0;

  svg {
    width: 30px;
    height: 30px;
    fill: #fff;
  }
  .filled {
    fill: ${digiText};
  }
`;