import styled from 'styled-components';
import { AppbarBg, navbarTextColor, backgroundColor, modalBorderColor, } from '../../theme';

const Root = styled.div`
  position: relative;
`;

const SettingsIcon = styled.span`
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  && svg{
    width: 3rem;
    height: 3rem;
  }

  && path {
    fill: ${navbarTextColor} ;
  }

  && circle {
    fill: ${AppbarBg};
  }

  &&.open {
    transform: scale(1.25, 1.25) rotate(90deg);
    transition: all 0.5s ease-in-out;
  }
  &&.close {
    transform: scale(1, 1) rotate(-90deg);
    transition: all 0.5s ease-in-out;
  }
`;

const SettingModal = styled.section`
  transition: all 0.3s ease-in-out;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? 1 : 0};
  display: flex;
  min-width: 100px;
  min-height: 100px;
  position: absolute;
  top: 2.5rem;
  left: 1.5rem;
  padding: .5rem;
  border-radius: 0 0 .2rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${AppbarBg};
  z-index: 20;
`;

const ModalTitle = styled.p`
  font-size: .8rem;
  font-weight: 500;
  color: ${navbarTextColor};
  margin: 10px auto;
`;

export {
  Root,
  SettingsIcon,
  SettingModal,
  ModalTitle,
}