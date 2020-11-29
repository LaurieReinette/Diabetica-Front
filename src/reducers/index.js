import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mainReducer from './mainReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
  errorReducer,
});

export default rootReducer;
