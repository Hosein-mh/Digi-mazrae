import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import DarkThemeProvider from './core/DarkThemeProvider';
import ReduxProvider from './redux';
import { hot } from 'react-hot-loader';
import { CookiesProvider  } from 'react-cookie';

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, []);

  return (
  <CookiesProvider >
    <ReduxProvider>
      <BrowserRouter>
          <DarkThemeProvider theme={{ theme: 'light' }}>
            <MainRouter/>
          </DarkThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  </CookiesProvider >
)}

export default hot(module)(App)
