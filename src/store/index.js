import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers/mainReducer';

import mainMiddleware from 'src/middlewares/mainMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
