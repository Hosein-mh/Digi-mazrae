import styled from 'styled-components';
import customMedia from '../../../style/custom-query';
import { textColor } from '../../../theme';

const Root = styled.section`
  width: 300px;
  height: 50px;
  border-radius: 5rem;
  margin-top: 1rem;
  position: relative;

  @media ${customMedia.aboveSmallestDesktop} {
    width: 500px;
    height: 60px;
  }
`;

const Placeholder = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: #7F8C8D;
  padding: 0 1rem;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: text;
  user-select: none;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  border: none;
  border-radius: 5rem;
  z-index: 1000;
  font-size: 1rem;
  &&:focus ~ ${Placeholder},
  &&:valid ~ ${Placeholder}
   {
    color: #fff;
    font-size: 0.8rem;
    padding: 0;
    transform: translateY(-2.5rem);
  }
`;

const SearchIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80px;
  background-color: #33FF89;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 5rem 0 0 5rem;
  cursor: pointer;
`;

export {
  Root,
  SearchInput,
  Placeholder,
  SearchIcon,
}