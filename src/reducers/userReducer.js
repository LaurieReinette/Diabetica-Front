import {
  DISPLAY_BLOODSUGAR_FORM,
  EMPTY_BLOODSUGAR_FORM,
  UPDATE_BLOODSUGAR_FIELD,
  SAVE_BLOODSUGARS,
  EDIT_REDUCER_BLOODSUGAR_TO_DELETE,
  DELETE_BLOODSUGAR,
  HIDE_CONFIRM_DELETE_BLOODSUGAR,
  EDIT_BLOODSUGAR_INSTATE,
  HIDE_EDIT_BLOODSUGAR_FORM,
} from 'src/actions/userActions';

const initialState = {
  date: '',
  time: '',
  rate: '',
  correction: '',
  displayBloodsugarFormBool: false,
  bloodsugars: [],
  bloodsugarId: 0,
  bloodsugarToEdit: {},
  displayConfirmDeleteBloodsugar: false,
  displayEditBloodsugar: false,

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
        date: '',
        time: '',
        rate: '',
        correction: '',
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
    case EDIT_REDUCER_BLOODSUGAR_TO_DELETE:
      return {
        ...state,
        bloodsugarId: action.bloodsugarId,
        displayConfirmDeleteBloodsugar: true,
      };
    case DELETE_BLOODSUGAR:
      return {
        ...state,
        displayConfirmDeleteBloodsugar: false,
      };
    case HIDE_CONFIRM_DELETE_BLOODSUGAR:
      return {
        ...state,
        displayConfirmDeleteBloodsugar: false,
      };
    case EDIT_BLOODSUGAR_INSTATE:
      return {
        ...state,
        bloodsugarToEdit: action.bloodsugar,
        date: action.bloodsugar.dateString,
        time: action.bloodsugar.timeString,
        rate: action.bloodsugar.rate,
        correction: action.bloodsugar.correction,
        displayEditBloodsugar: true,
        displayBloodsugarFormBool: false,
      };
    case HIDE_EDIT_BLOODSUGAR_FORM:
      return {
        ...state,
        displayEditBloodsugar: false,
      };
    default: return state;
  }
};
// action.bloodsugar
export default userReducer;
