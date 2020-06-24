import { createGlobalStyle, injectGlobal } from 'styled-components';
import ShabnamEot from './fonts/Shabnam.eot';
import ShabnamWoff from './fonts/Shabnam.woff';
import ShabnamWoff2 from './fonts/Shabnam.woff2';
import ShabnamTtf from './fonts/Shabnam.ttf';
import ShabnameBoldEot from './fonts/Shabnam-Bold.eot';
import ShabnamBoldWoff from './fonts/Shabnam-Bold.woff';
import ShabnamBoldWoff2 from './fonts/Shabnam-Bold.woff2';
import ShabnamBoldTtf from './fonts/Shabnam-Bold.ttf';
import ShabnamLightEot from './fonts/Shabnam-Light.eot';
import ShabnamLightWoff from './fonts/Shabnam-Light.woff';
import ShabnamLightWoff2 from './fonts/Shabnam-Light.woff2';
import ShabnamLightTtf from './fonts/Shabnam-Light.ttf';
import ShabnamMediumEot from './fonts/Shabnam-Medium.eot';
import ShabnamMediumWoff2 from './fonts/Shabnam-Medium.woff2';
import ShabnamMediumWoff from './fonts/Shabnam-Medium.woff';
import ShabnamMediumTtf from './fonts/Shabnam-Medium.ttf';
import ShabnamThinEot from './fonts/Shabnam-Thin.eot';
import ShabnamThinWoff2 from './fonts/Shabnam-Thin.woff2';
import ShabnamThinWoff from './fonts/Shabnam-Thin.woff';
import ShabnamThinTtf from './fonts/Shabnam-Thin.ttf';

export default createGlobalStyle `
  @font-face {
    font-family: Shabnam;
    src: url(${ShabnamEot});
    src: url('./fonts/Shabnam.eot?#iefix') format('embedded-opentype'),
         url(${ShabnamWoff2}) format('woff2'),
         url(${ShabnamWoff}) format('woff'),
         url(${ShabnamTtf}) format('truetype');
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Shabnam";
    src: url(${ShabnameBoldEot});
    src: url('./fonts/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
         url(${ShabnamBoldWoff2}) format('woff2'),
         url(${ShabnamBoldWoff}) format('woff'),
         url(${ShabnamBoldTtf}) format('truetype');
    font-weight: bold;
  }
  
  @font-face {
    font-family: "Shabnam";
    src: url(${ShabnamLightEot});
    src: url('../client/assets/fonts/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
         url(${ShabnamLightWoff2}) format('woff2'),
         url(${ShabnamLightWoff}) format('woff'),
         url(${ShabnamLightTtf}) format('truetype');
    font-weight: 300;
  }
  
  @font-face {
    font-family: "Shabnam";
    src: url(${ShabnamMediumEot});
    src: url('./fonts/Shabnam-Medium.eot?#iefix') format('embedded-opentype'),
         url(${ShabnamMediumWoff2}) format('woff2'),
         url(${ShabnamMediumWoff}) format('woff'),
         url(${ShabnamMediumTtf}) format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: "Shabnam";
    src: url(${ShabnamThinEot});
    src: url('./fonts/Shabnam-Thin.eot?#iefix') format('embedded-opentype'),
         url(${ShabnamThinWoff2}) format('woff2'),
         url(${ShabnamThinWoff}) format('woff'),
         url(${ShabnamThinTtf}) format('truetype');
    font-weight: 100;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
    direction: rtl;
    font-family: Shabnam, 'Shabnam', Tahoma, Geneva, Verdana, sans-serif;
  }
`;