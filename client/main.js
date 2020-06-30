import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import StyleContext from 'isomorphic-style-loader/StyleContext';

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

hydrate(<StyleContext.Provider value={{ insertCss }}>
  <App/>
</StyleContext.Provider>, document.getElementById('root'))
