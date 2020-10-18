import styled from 'styled-components';

export const Root = styled.div `
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eee;
  border-radius: 8px;
  color: #0fabc6;
  user-select: none;
  padding: 0 10px;
`;

export const Selector = styled.span `
  cursor: pointer;
  color: #e0e0e2;
  font-size: 2rem;
  height: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
`;

export const Minus = styled.span `
  width: 18px;
  height: 3px;
  background: #e0e0e2;
`;