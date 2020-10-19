import styled, { keyframes } from 'styled-components';

const beat = keyframes `
  0,100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }
`;
const beatAgain = keyframes `
  0,100% {
    transform: scale(1);
  }

  40% {
    transform: scale(1.5);
  }
`;

export const Root = styled.div `
  cursor: pointer;
  position: relative;
  
  &&.active {
    #heart {
      animation: ${beat} 300ms ease-in-out normal;
    }
  }

  &&.noActive {
    #heart {
      animation: ${beatAgain} 300ms ease-in-out normal;
    }
  }
`;

export const Guide = styled.div `
  position: absolute;
  transition: all .3s ease-in;
  right: -50px;
  top: 0;
  width: 100px;
  text-align: center;
  line-height: 1.3rem;
  background: rgba(0,0,0,0.7);
  border-radius: 0 10px 10px 0;
  color: #fff;
  user-select: none;

  &&.show {
    right: -110px;
  }
`;