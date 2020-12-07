import styled from 'styled-components';

export const Root = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentSummery = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const LinkHover = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50% 8px 8px 50%;
  width: 60px;
  height: 100%;
  background-color: rgba(166, 166, 166, .3);
  transition: all 300ms ease;
  text-align: center;
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

export const CommentSummeryNote = styled.div `
  span {
    font-size: 19px;
    font-size: 1.357rem;
    line-height: 1.158;
    color: #5a5a5a;
    letter-spacing: -.4px;
    margin-bottom: 20px;
    display: block;
  }
  p {
    font-size: 15px;
    font-size: 1.071rem;
    line-height: 2.27;
    margin-bottom: 35px;
    color: #676767;
  }
  a {
    font-size: 1.143rem;
    line-height: 1.375;
    padding: 16px 105px 16px 45px;
    border-radius: 8px;
    background-color: #7a7a7a;
    border: 1px solid #7a7a7a;
    overflow: hidden;
    text-align: right;
    letter-spacing: -.7px;
    user-select: none;
    color: #fff;
    position: relative;
  }
  a:hover {
    ${LinkHover} {
      width: 100%;
      border-radius: 8px;
    }
  }
`;

