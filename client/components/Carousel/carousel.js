import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  SlideButton,
  PREV,
  NEXT
} from "./style";

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT, deltaX: 0 };

const Carousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);
  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };
  //set time out for auto sliding
  useEffect(() => {
    let id = setTimeout(() => slide(PREV) ,4000);
    return () => {
      clearTimeout(id);
    }
  }, [state.pos]);
  const handlers = useSwipeable({
    onSwipedRight: () => slide(NEXT),
    onSwipedLeft: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
    <div style={{width: "100%", height: "100%", position: 'relative'}} {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
      </Wrapper>
      <SlideButton onClick={() => slide(PREV)} className="left">
        <svg id="prevArrow" xmlns="http://www.w3.org/2000/svg" width="25" height="50" viewBox="0 0 25 50">
          <path id="Path_2" data-name="Path 2" d="M463.387,316.687l-23.15,25,23.15,25,1.85-2.349L444.1,341.687l21.138-22.432Z" transform="translate(-440.237 -316.687)" fill="#fff"/>
        </svg>
      </SlideButton>
      <SlideButton onClick={() => slide(NEXT)}  className="right">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="50" viewBox="0 0 25 50">
          <path id="Path_1" data-name="Path 1" d="M442.087,316.687l23.15,25-23.15,25-1.85-2.349,21.138-22.651-21.138-22.432Z" transform="translate(-440.237 -316.687)" fill="#fff"/>
        </svg>
      </SlideButton>
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
