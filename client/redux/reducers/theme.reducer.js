import { TOGGLETHEME } from '../actionTypes';

const initialState = { isDarkTheme: false };

const themeReducer = (state= initialState, action) => {
  switch (action.type) {
    case TOGGLETHEME:
      return { isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
}

export default themeReducer;