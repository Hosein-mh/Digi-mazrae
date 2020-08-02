import styled from 'styled-components';
import { navbarTextColor } from '../../theme';

export const MenuToggle = styled.div`
  display: block;
  position: relative;
  z-index: 1;
  user-select: none;
  cursor: pointer;

  span {
    display: block;
    width: 33px;
    height: 4px;
    position: relative;
    background-color: ${navbarTextColor};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
    
    /* 
    * Transform all the slices of hamburger
    * into a crossmark.
    */
    opacity: ${props => props.checked && 1};
    transform: ${props => props.checked && "rotate(-45deg) translate(-3px,5px)"};

  }

  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
    margin: ${props => props.checked ? 0 : "5px 0"};

    /*
    * last one should go the other direction
    */
    transform: ${props => props.checked && "rotate(45deg) translate(-6px,-10px)"}; 
  }

  span:nth-last-child(3) {
    opacity: ${props => props.checked && 0};
    transform: ${props => props.checked && "rotate(0deg) scale(0, 0)"};
  }
`;