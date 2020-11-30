import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';

import mainMiddleware from 'src/middlewares/mainMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    mainMiddleware,
    authMiddleware,
    userMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
