import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;