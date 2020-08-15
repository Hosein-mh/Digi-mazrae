import styled from 'styled-components';
import customMedia from '../../style/custom-query';


const Root = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 2rem;
  /* padding-top: 2rem; */
  
  @media ${customMedia.aboveSmallestPhablet} {
    /* transform: translateY(200px); */
    width: 800px;
    padding-top: 0;
  }

  @media ${customMedia.aboveSmallestDesktop} {
    /* transform: translateY(200px); */
    width: 100%;
    padding-top: 0;
  }

  /* Elastic carousel styling: */
  && .rec .rec-arrow {
    &:hover {
      background-color: #33FF89;
      color: #fff;
    }
  }
  && .rec .rec-dot {
    background-color: rgba(255,255,255,.2);
    &:hover {
      box-shadow: 0 0 1px 3px rgba(51, 255, 137, 0.6);
    }
  }
  && .rec .rec-dot_active {
    background-color: rgba(51, 255, 137, .8);
    box-shadow: 0 0 1px 3px rgba(51, 255, 137, 1);
  }
`;

export {
  Root,
}