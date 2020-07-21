import styled from 'styled-components';
import { AppbarBg, AppbarFg } from '../../theme';
import customMediQuery from '../../style/custom-query';

const AppBar = styled.header`
  position: sticky;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  width: 100%;
  height: auto;
  min-height: 3rem;
  color: ${AppbarFg};
  background-color: ${AppbarBg};
`;

const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  min-width: 100px ;
  height: auto;
  max-width: 5.5rem;
  padding: 0 1rem;

  @media ${customMediQuery.aboveSmallestPhablet} {
    width: 3rem;

  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FloatLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;



export {
  AppBar,
  Navbar,
  LinksContainer,
  Logo,
  FloatLeft,
}