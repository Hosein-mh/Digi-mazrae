import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Navbar, Logo } from './style';
import { Link } from 'react-router-dom';
import logoLight from '../../assets/images/logoLight.png';
import logoDark from '../../assets/images/logoDark.png';
import RootContainer from '../../components/RootContainer';
import Settings from '../../components/Settings';

export default function Menu() {
  const darkThemeEnabled = useSelector(state => state.theme.isDarkTheme)

  return (
    <AppBar>
      <Navbar>
        <RootContainer>
          <Link to='/' style={{display: 'flex'}}>
            <Logo src={darkThemeEnabled ? logoDark : logoLight} />
          </Link>
          <div>
            <Settings />
          </div>
        </RootContainer>
      </Navbar>
    </AppBar>
  )
}
