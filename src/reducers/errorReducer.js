import {
  DISPLAY_ERROR,
  SAVE_ERROR,
  GET_ERRORDETECTED_FALSE,
  EMPTY_ERRORS,
} from 'src/actions/errorActions';

const initialState = {
  error: [],
  errorDetected: false,
};
const errorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ERROR:
      state.error.push(action.data);
      return {
        ...state,
        error: state.error,
        errorDetected: true,
      };
    case DISPLAY_ERROR:
      return {
        ...state,
      };
    case GET_ERRORDETECTED_FALSE:
      return {
        ...state,
        errorDetected: false,
      };
    case EMPTY_ERRORS:
      return {
        ...state,
        error: [],
      };
    default: return state;
  }
};

export default errorReducer;
