import {
  DISPLAY_ERROR,
  SAVE_ERROR,
} from 'src/actions/errorActions';

const initialState = {
  error: '',
  errorDetected: false,
};
const errorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ERROR:
      return {
        ...state,
        error: action.error,
        errorDetected: true,
      };
    case DISPLAY_ERROR:
      return {
        ...state,
      };
    default: return state;
  }
};

export default errorReducer;
