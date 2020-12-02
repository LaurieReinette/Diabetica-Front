import {
  DISPLAY_BLOODSUGAR_FORM,
  EMPTY_BLOODSUGAR_FORM,
  UPDATE_BLOODSUGAR_FIELD,
  SAVE_BLOODSUGARS,
} from 'src/actions/userActions';

const initialState = {
  date: '',
  time: '',
  rate: '',
  correction: '',
  displayBloodsugarFormBool: false,
  bloodsugars: [],
};

const userReducer = (state = initialState, action = {}) => {
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
    case EMPTY_BLOODSUGAR_FORM:
      return {
        ...state,
        date: '',
        time: '',
        rate: '',
        correction: '',
      };
    case SAVE_BLOODSUGARS:
      return {
        ...state,
        bloodsugars: action.datas,
      };
    default: return state;
  }
};

export default userReducer;
