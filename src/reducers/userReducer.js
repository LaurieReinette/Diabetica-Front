import {
  DISPLAY_BLOODSUGAR_FORM,
  HIDE_BLOODSUGAR_FORM,
  UPDATE_BLOODSUGAR_FIELD,
} from 'src/actions/userActions';

const initialState = {
  date: '',
  time: '',
  rate: '',
  correction: '',
  displayBloodsugarFormBool: false,
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_BLOODSUGAR_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case DISPLAY_BLOODSUGAR_FORM:
      return {
        ...state,
        displayBloodsugarFormBool: !state.displayBloodsugarFormBool,
      };
    case HIDE_BLOODSUGAR_FORM:
      return {
        ...state,
        displayBloodsugarFormBool: false,
      };
    default: return state;
  }
};

export default mainReducer;
