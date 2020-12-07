import styled from 'styled-components';

export const Root = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
`;

export const TargetTitle = styled.span `
  width: 100px;
  margin: 0 1rem;
  color: #515151;
  font-size: 1rem;
`;

export const Bar = styled.div `
  width: 100%;
  min-width: 200px;
  height: 7px;
  background-color: #d5d5d5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CircleStep = styled.div `
  z-index: 10;
  width: 15px;
  height: 15px;
  background-color: ${props => props.index > props.rate ? "#d5d5d5" : "#3fb8af"};
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
`;

export const RateIndicator = styled.div `
  display: flex;
  align-items: center;
  background-color: #3fb8af;
  width: ${props => props.rate / 4 * 100}%;
  transition: width 500ms ease-in-out;
  height: 7px;
  position: absolute;
  right: ${props => props.rate == 0 ? '15px' : 0};

  &::after {
    position: absolute;
    right: calc(100% - 15px);
    transition: right 500ms ease-in-out;
    content: '';
    background: #3fb8af;
    z-index: 12;
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`;
