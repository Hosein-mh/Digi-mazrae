import styled from "styled-components";
import customMedia from '../../style/custom-query';

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Item = styled.div`
  text-align: center;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    if (!props.sliding) return "translateX(0)";
    if (props.dir === PREV) return "translateX(400px)";
    if (props.dir === NEXT) return "translateX(-400px)";
    return "translateX(0%)";
  }};
  @media ${customMedia.aboveSmallestDesktop} {
    transform: ${props => {
    if (!props.sliding) return "translateX(0)";
    if (props.dir === PREV) return "translateX(600px)";
    if (props.dir === NEXT) return "translateX(-600px)";
    return "translateX(0%)";
  }};
  }

 
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: transparent;
  
`;

export const CarouselSlot = styled.div`
  flex: 1;
  /* flex-basis: 80%; */
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: rgba(0,0,0,.5);
  text-decoration: none;
  border: none;
  border-radius: 50%;
  padding: 1rem 1.5rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  transform: scale(.8,.8);
  transition: all .1s ease-in-out;
  visibility: hidden;

  @media ${customMedia.aboveSmallestDesktop} {
    visibility: visible;
  }

  &&.left {
    position: absolute;
    top: 33%;
    left: -2rem;
  }
  &&.right {
    position: absolute;
    top: 33%;
    right: -2rem;
  }
  &:active {
    background-color: #33FF89;
    transform: scale(1,1);
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
