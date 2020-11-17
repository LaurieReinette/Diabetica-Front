import { combineReducers } from 'redux';

import authReducer from './authReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
  authReducer,
  mainReducer,
});

export default rootReducer;
