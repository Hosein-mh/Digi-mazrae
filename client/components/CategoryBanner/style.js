import styled from 'styled-components';
import customMedia from '../../style/custom-query';
import BackgroundImage from '../../assets/images/walnuts.jpg';

const Root = styled.section`
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
  margin: 0 5px;
  border-radius: .5rem;
  background-image: ${props => props.imageSrc ? `url(${props.imageSrc})` : `url(${BackgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${customMedia.aboveSmallestDesktop} {
    width: 250px;
    height: 250px;
  }
`;

const Title = styled.h5`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 1.5rem;
    font-weight: normal;
    border-radius: 0 0 0.5rem 0.5rem;
`;

export {
  Root,
  Title,
}