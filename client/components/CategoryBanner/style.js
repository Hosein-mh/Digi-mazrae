import styled from 'styled-components';
import customMedia from '../../style/custom-query';
import BackgroundImage from '../../assets/images/walnuts.jpg';

const Root = styled.section`
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
  margin-left: 10px;
  background-image: ${props => `url(${BackgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${customMedia.aboveSmallestDesktop} {
    width: 300px;
    height: 300px;
  }
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
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
`;

export {
  Root,
  Cover,
  Title,
}