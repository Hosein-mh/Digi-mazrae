import styled from 'styled-components';

export const Root = styled.div `
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  direction: ltr;
  position: relative;
`;

export const InstaHead = styled.div `
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.img `
  width: 32px;
  height: 32px;
  padding: 2px;
  border: 1px solid #dd2a7b;
  border-radius: 50%;
`;

export const Dots = styled.div ``;

export const PostImg = styled.img `
  width: 100%;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
`;

export const InstaActions = styled.div `
  width: 100%;
  height: 70px;
  border-radius: 0 0 20px 20px;
  background: #fff;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const LeftPart = styled.div `
  padding-top: 10px;
  margin-left: 10px;
  min-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RightPart = styled.div `
  padding-top: 10px;
  margin-right: 10px;
  min-width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OverLink = styled.a `
  cursor: pointer;
  width: 100%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;