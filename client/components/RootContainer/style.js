import styled from 'styled-components';
import customMediaQuery, { size } from '../../style/custom-query';

const Root = styled.div`
  width: 100%;
  height: 100%;

  @media ${customMediaQuery.belowLargestMobile} {
    width: ${size.mobileMax}px;
  }
  @media ${customMediaQuery.aboveSmallestPhablet} {
    width: ${size.phabletMin}px;
  }
  @media ${customMediaQuery.aboveSmallestTablet} {
    width: ${size.tabletMin}px;
  }
  @media ${customMediaQuery.aboveSmallestTablet} {
    width: ${size.desktopMin}px;
  }
  @media ${customMediaQuery.aboveSmallestHd} {
    width: ${size.hdMin}px;
  }
`;

export {
  Root
}