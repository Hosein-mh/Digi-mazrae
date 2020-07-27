import { combineReducers } from 'redux';
import ThemeReducer from './theme';
import user from './user';

const rootReducer =
	combineReducers({
		theme: ThemeReducer,
		user,
	});
export default rootReducer;
