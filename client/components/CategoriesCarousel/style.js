import styled from 'styled-components';
import customMedia from '../../style/custom-query';


const Root = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-top: 2rem;
  
  @media ${customMedia.aboveSmallestPhablet} {
    transform: translateY(200px);
    width: 500px;
    padding-top: 0;
  }

  @media ${customMedia.aboveSmallestDesktop} {
    transform: translateY(200px);
    width: 800px;
    padding-top: 0;
  }
`;

export {
  Root,
}