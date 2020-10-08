import { combineReducers } from 'redux';
import ThemeReducer from './theme';
import user from './user';
import cart from './cart';

const rootReducer =
	combineReducers({
		theme: ThemeReducer,
		user,
		cart,
	});
export default rootReducer;
