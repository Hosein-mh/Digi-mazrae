import { combineReducers } from 'redux';
import ThemeReducer from './theme.reducer';

export default combineReducers({
  theme: ThemeReducer,
})