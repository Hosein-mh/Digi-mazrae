import styled from 'styled-components';

export const Root = styled.div `
  width: 100%;
  display: flex;
  background-color: #fff;
  margin: 1rem 0;
  padding: 0 1rem;
`;

export const InputsArea = styled.div `
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const CommentRow = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin-right: -7px;
  margin-left: -7px;
  margin-top: 25px;
`;

export const CommentCol = styled.div `
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 7px;
  padding-left: 7px;
`;

export const CommentTitle = styled.div `
    margin-bottom: 12px;
    color: #565656;
    font-size: 16px;
    font-size: 1.143rem;
    line-height: 1.375;
    position: relative;
    display: flex;
    align-items: center;
    
    &&.p-strength {
      &::before {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #00bfd6;
        content: "";
        margin-left: 4px;
      }
    };
    &&.p-leak {
      &::before {
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #fb3449;
        content: "";
        margin-left: 4px;
      }
    };
`;

export const InputLabel = styled.label `
  position: relative;
  display: inline-block;
  width: 100%;
  line-height: 22px;
`;

export const InputField = styled.input `
  border-radius: 8px;
  background: #fff;
  border: 1px solid #c8c8c8;
  color: #717171;
  font-size: 14px;
  font-size: 1rem;
  line-height: 1.571;
  padding: 11px 12px;
  width: 100%;
  letter-spacing: -.8px;
`;

export const TextArea = styled.textarea `
  height: 160px;
  border: 1px solid #c8c8c8;
  border-radius: 8px;
  outline: none;
  padding: 10px;
  color: #424242;
  width: 100%;
  resize: vertical;
  vertical-align: top;
  min-height: 56px;
  font-size: 12px;
  font-size: .857rem;
  line-height: 2.58;
  overflow: auto;
`;

export const CommentSubmitButton = styled.button `
  font-size: 1.143rem;
  line-height: 1.375;
  border-radius: 8px;
  background-color: #00bfd6;
  border: 1px solid #41a7b4;
  padding: 14px 31px;
  color: #fff;
  margin: 25px 0;
  cursor: pointer;
`;

export const ValidationError = styled.div `
  position: absolute;
  display: block;
  right: 100%;
  bottom: 100%;
  margin-right: -150px;
  margin-bottom: 10px;
  background: #ef5662;
  white-space: nowrap;
  padding: 9px 25px;
  color: #fff;
  z-index: 2;
  &::before {
    width: 0;
    height: 0;
    border-color: #ef5662 transparent transparent;
    border-style: solid;
    border-width: 10px 12px 0;
    top: 100%;
    right: 35px;
    content: "";
    position: absolute;
  }
`;