import styled from 'styled-components';
import { modalErrorBorder, modalBorderColor ,navbarTextColor, modalBackground, digiText, mazText, leafColor, textColor } from '../../theme';
import customMedia from '../../style/custom-query';

export const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

export const ResetPasswordForm = styled.div`
  width: 400px;
  height: 400px;
  padding: 2rem;
  background-color: ${modalBackground};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.section`
  text-align: center;
  color: ${mazText};
  font-size: 1.2rem;
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
  background-color: ${leafColor};

  &:disabled {
    background-color: gray;
  }
  
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
export const Error = styled.div`
  display: flex;
  justify-content: center;
  color: ${modalErrorBorder};
  
  @media ${customMedia.belowLargestMobile} {
    font-size: .8rem;
  }
`;
