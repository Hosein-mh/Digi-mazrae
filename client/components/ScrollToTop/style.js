import styled, {keyframes} from 'styled-components';
import customMedia from '../../style/custom-query';

const fadeIn = keyframes `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
`

export const Button = styled.button `
  &.scrollTop {
  border: none;
  border-radius: 50%;
  background: #CF6D5C;
  position: fixed; 
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  box-shadow: 1px 3px 6px rgb(207, 109, 100, .7);

  @media ${customMedia.aboveSmallestDesktop} {
    width: 80px;
    height: 80px;
  }
}

&.scrollTop:hover{
  opacity: 1;
}
svg {
  width: 50px;
  height: 50px;
}
`;
