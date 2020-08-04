import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import passport from './passport'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
// Import Routes
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import emailRoutes from './routes/email.routes';
import categoryRoutes from './routes/category.routes';

//enable dotenv
dotenv.config();

// modules for server side rendering
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainRouter from './../client/MainRouter'
import { StaticRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../client/redux/reducers';
import StyleContext from 'isomorphic-style-loader/StyleContext';

import { ServerStyleSheet, ThemeProvider } from 'styled-components';
// import theme from './../client/theme'
//end

//comment out before building for production
import devBundle from './devBundle'

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

//comment out before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// passport configs
app.use(passport.initialize());
// app.use(passport.session());

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/', userRoutes);
app.use('/', authRoutes);
app.use('/', categoryRoutes);
app.use('/', emailRoutes);

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const store = createStore(rootReducer);
  const preloadedState = store.getState();
  const title = "دیجی مزرعه، سفارش آنلاین خشکبار و سبزیجات"
  // const css = sheet.toString();
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))
  const markup = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <StyleContext.Provider value={{ insertCss }}>
        <ReduxProvider store={store}>
          <StaticRouter location={req.url} context={context}>
              <ThemeProvider theme={{theme: 'light'}}>
                <MainRouter test="TEST PROP"/>
              </ThemeProvider>
          </StaticRouter>
        </ReduxProvider>
      </StyleContext.Provider>
     )
  )
    if (context.url) {
      return res.redirect(303, context.url)
    }
    res.status(200).send(Template({
      markup: markup,
      css: css,
      preloadedState: preloadedState,
      title: title
    }))
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

export default app
