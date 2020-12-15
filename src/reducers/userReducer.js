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
  HIDE_INFORMATIONS_MODAL,
  WRITE_INFORMATIONS_MODAL,

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
  informationsModal: '',
  displayInformationsModal: false,

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
        rate: action.bloodsugar.rate.toString(),
        correction: action.bloodsugar.correction,
        displayEditBloodsugar: true,
        displayBloodsugarFormBool: false,
      };
    case HIDE_EDIT_BLOODSUGAR_FORM:
      return {
        ...state,
        displayEditBloodsugar: false,
      };
    case HIDE_INFORMATIONS_MODAL:
      return {
        ...state,
        displayInformationsModal: false,
        informationsModal: '',
      };
    case WRITE_INFORMATIONS_MODAL:
      return {
        ...state,
        informationsModal: action.message,
        displayInformationsModal: true,
      };
    default: return state;
  }
};
// action.bloodsugar
export default userReducer;
