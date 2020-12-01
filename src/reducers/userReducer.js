import {
  DISPLAY_BLOODSUGAR_FORM,
  HIDE_BLOODSUGAR_FORM,
} from 'src/actions/userActions';

const initialState = {
  date: '',
  hour: '',
  rate: '',
  correction: '',
  displayBloodsugarFormBool: false,
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
