/** How to use in your styled-Components

  ** First import it to your component
    import customMediaQuery from '../../style/custom-query';

  ** Second use like below example
    const ItemIcon = Styled.span`
      @media ${customMediaQuery.aboveSmallestHd} {
      color: green;
    }

    color: purple;
    font-size: 35px;

    @media ${customMediaQuery.aboveSmallestDesktop} {
      && {
        color: green;
      }
    }
  `;

  Note: @media have to places in top of styled components or choose within &&.
*/

// const { screen } = window;

export const size = {
  mobileMax: 480,
  phabletMin: 481,
  phabletMax: 768,
  tabletMin: 769,
  tabletMax: 1024,
  desktopMin: 1025,
  desktopMax: 1280,
  hdMin: 1281,
};

export default {
  belowLargestMobile: `(max-width: ${size.mobileMax}px)`,
  aboveSmallestPhablet: `(min-width: ${size.phabletMin}px)`,
  belowLargestPhablet: `(max-width: ${size.phabletMax}px)`,
  aboveSmallestTablet: `(min-width: ${size.tabletMin}px)`,
  belowLargestTablet: `(max-width: ${size.tabletMax}px)`,
  aboveSmallestDesktop: `(min-width: ${size.desktopMin}px)`,
  belowLargestDesktop: `(max-width: ${size.desktopMax}px)`,
  aboveSmallestHd: `(min-width: ${size.hdMin}px)`,
};

// export const isAboveSmallestDesktop = screen.width > size.desktopMin;
// export const isAboveSmallestTablet = screen.width < size.aboveSmallestTablet;
// export const isBelowLargestTablet = screen.width < size.belowLargestTablet;
// export const isBelowLargestMobile = screen.width < size.mobileMax;
// export const isAboveSmallestPhablet = screen.width > size.phabletMin;
// export const isBelowLargestDesktop = screen.width > size.desktopMax;
// export const isAboveSmallestHd = screen.width > size.hdMin;
