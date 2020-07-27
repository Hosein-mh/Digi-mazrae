import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
};
const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const routeMiddleware = routerMiddleware(history);
//saga middleawre
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
  // ... options
  level: 'log', // console's level 'log' | 'console' | 'warn' | 'error' |
});
let middlewares = [routeMiddleware, sagaMiddleware];
if(process.env.NODE_ENV === 'development') {
  middlewares = [routeMiddleware, logger, sagaMiddleware];
};


const preloadedState = window.__PRELOADED_STATE__;
const configureStore = createStore(
  persistedReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default () => {
  let store = configureStore;
  let persistor = persistStore(store)
  return { store, persistor }
};