import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.section`
  padding: 0 1rem;
  margin: 1rem auto;
  color: #D92027;
  text-align: center;
`;

export const Button = styled.button`
  border: 1px solid #D92027;
  &:hover{
    background-color: #D92027;
    color: #fff;
  }
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: #D92027;
  background: transparent;
  cursor: pointer;
`;