import styled from 'styled-components';
import { modalErrorBorder, modalBorderColor ,navbarTextColor, modalBackground, digiText, mazText, leafColor, textColor } from '../../../theme';
import customMedia from '../../../style/custom-query';

const inputBorderColor = (condition) => {
  if(!condition)
    return modalErrorBorder;
  else return modalBorderColor;
}

export const Root = styled.div`
  color: ${navbarTextColor};
`;

export const Trigger = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${navbarTextColor}
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
`;

export const ModalDarkBehind = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0,0,0,0.3);
`

export const ModalCard = styled.div`
  width: 100%;
  min-height: 600px;
  transform: scale(0.5, 0.5);
  background: ${modalBackground};
  transition: transform 300ms ease;
  z-index: 30;

  &&.active {
    transform: scale(1,1);
  }

  @media ${customMedia.aboveSmallestPhablet} {
    width: 500px;
    height: 600px;
    border-radius: 0.5rem;
  }
`;

export const ModalInputs = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 1.5rem;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  margin: 1rem;
  cursor: pointer;
  &&:active {
    transform: scale(.8);
  }
  && svg {
    width: 20px;
    height: 20px;
  }
  && svg line {
    stroke: ${digiText};
  }
`;

export const DigiIcon = styled.section`
  display: flex;
  position: relative;

  && svg {
    width: 30px;
    position: absolute;
    bottom: 0;
    left: 50%;
    /* padding-bottom: 3rem; */
  }
  && svg path {
    fill: ${leafColor};
  }

  && section {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    @media ${customMedia.aboveSmallestDesktop} {
      font-size: 2.5rem;
    }
  }
`;

export const DigiText = styled.section`
  font-weight: 600;
  color: ${digiText};
`;
export const MazText = styled.section`
  color: ${mazText};
`;

export const FieldInput = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  @media ${customMedia.aboveSmallestPhablet} {
    height: 50px;
  }
`;

export const Placeholder = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: #7F8C8D;
  padding: 0 1.5rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: text;
  user-select: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  font-size: 1.2rem;
  background-color: transparent;
  border-radius: 2rem;
  color: ${textColor};
  border: 1px solid ${modalBorderColor};
  
  &&:focus ~ ${Placeholder},
  &&:valid ~ ${Placeholder}
   {
    color: ${navbarTextColor};
    padding-bottom: 2rem;
    font-size: 0.8rem;
    transform: translateY(-1rem);

    @media ${customMedia.aboveSmallestPhablet} {
      transform: translateY(-1.2rem);
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  @media ${customMedia.aboveSmallestPhablet} {
    height: 50px;
  }
  border: none;
  border-radius: 2rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  &:active {
    transform: scale(.9)
  }
`;

export const LoginButton = styled(Button)`
  background-color: #35D0BA;
  &:disabled {
    background-color: gray;
  }
`;

export const GoogleButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${digiText};
`;
export const LoginPhoneButton = styled(Button)`
  background-color: ${leafColor};
`;

export const DirectSignup = styled.section`
  cursor: pointer;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  color: ${modalErrorBorder};
  
  @media ${customMedia.belowLargestMobile} {
    font-size: .8rem;
  }
`;



