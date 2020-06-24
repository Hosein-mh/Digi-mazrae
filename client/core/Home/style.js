import styled from 'styled-components';
import {backgroundColor, textColor, dimensions} from './../../theme';
import landingPageBg from '../../assets/images/landingPageBg.jpg';

const Root = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  margin: 0;
  color: #fff;
  background: url(${landingPageBg}) center no-repeat;
  background-position: center;
  background-color: rgba(0,0,0,1);
`;

const LandContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export {
  Root,
  LandContainer,
}