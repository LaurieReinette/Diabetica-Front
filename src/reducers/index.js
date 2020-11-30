import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mainReducer from './mainReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
  errorReducer,
  userReducer,
});

export default rootReducer;
