import styled from 'styled-components';
import { modalBorderColor ,navbarTextColor, textColor } from '../../theme';
import customMedia from '../../style/custom-query';

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
    transform: translateY(-1.5rem);
  }
}
`;