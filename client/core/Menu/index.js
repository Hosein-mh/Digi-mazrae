import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Navbar, Logo, LinksContainer, FloatLeft } from './style';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/images/logoLight.png';
import logoDark from '../../assets/images/logoDark.png';
import RootContainer from '../../components/RootContainer';
import Settings from '../../components/Settings';
import Login from '../../components/user/Login';

export default function Menu() {
  const darkThemeEnabled = useSelector(state => state.theme.isDarkTheme);

  return (
    <AppBar>
      <Navbar>
        <RootContainer>
          <LinksContainer>
            <Link to='/' style={{display: 'flex'}}>
              <Logo src={darkThemeEnabled ? logoDark : logoLight} />
            </Link>
            <FloatLeft>
              <Login />
              <Settings />
            </FloatLeft>
          </LinksContainer>
        </RootContainer>
      </Navbar>
    </AppBar>
  )
}
