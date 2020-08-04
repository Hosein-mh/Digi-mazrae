import styled from 'styled-components';
import { textColor, modalErrorBorder, modalBorderColor, submitColor } from '../../../theme';
import customMedia from '../../../style/custom-query';

export const Error = styled.div`
  display: flex;
  justify-content: center;
  color: ${modalErrorBorder};
  
  @media ${customMedia.belowLargestMobile} {
    font-size: .8rem;
  }
`;


export const Root = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  padding: 1rem;
`;

export const Title = styled.section `
  font-size: 1.2rem;
  font-weight: 500;
  color: ${textColor};
`;

export const Form = styled.form `
  width: 100%;
  min-height:400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FileInput = styled.label `
  width: 100%;
  height: 50px;
  cursor: pointer;
  border: 1px solid ${modalBorderColor};
  border-radius: 5rem;
  background-color: transparent;
  color: ${textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:active {
    transform: scale(.8,.8);
  }
`

export const SubmitButton = styled.button `
  cursor: help;
  width: 100%;
  height: 60px;
  border-radius: 5rem;
  border: none;
  background-color: ${submitColor};
  color: #fff;
  max-width: 200px;
  font-size: 1.1rem;
  font-weight: 400;
`;
