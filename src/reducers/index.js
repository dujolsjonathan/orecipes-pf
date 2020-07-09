import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import loginReducer from './login';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  login: loginReducer,
});

export default rootReducer;
