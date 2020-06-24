import styled from 'styled-components';

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  width: 4.5rem;
  height: 2rem;
  border: 1px solid #fff;
  background-color: ${props => props.darkMode ? '#2C3E50' : '#32e0c4'};
  border-radius: 2rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 1s ease-in-out;
  z-index: 1000;

  && svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  #moon {
    transition: all 0.5s ease-in-out;
    transform: ${props => props.darkMode ? 'translateY(0)' : 'translateY(60px)'};
  }

  #sun {
    transition: all 0.5s ease-in-out;
    transform: ${props => props.darkMode ? 'scale(0.5,0.5) translate(50px,-10px)' : 'scale(1,1)'};
  }
`;