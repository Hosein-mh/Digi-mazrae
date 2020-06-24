import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';


export default function DarkThemeProvider ({ children }) {
  const isDarkTHemeEnabled = useSelector(state => state.theme.isDarkTheme);

  return <ThemeProvider theme={{ theme: isDarkTHemeEnabled ? 'dark' : 'light' }}>
    {children}
  </ThemeProvider>
}