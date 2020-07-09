import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import recipesMiddleware from 'src/middlewares/recipesMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

import reducer from 'src/reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    recipesMiddleware,
    userMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
