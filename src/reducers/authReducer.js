import {
  SEND_AUTH,
  SAVE_TOKEN,
  UPDATE_EMAIL_FIELD,
  GET_LOADER_FALSE,
  TEST_EMAIL_KNOWN,
  SEND_TEST_MAIL,
  UPDATE_PASSWORD_FIELD,
  FETCH_USER_DATAS,
  SAVE_USER_DATAS,
  START_REGISTRATION,
  CREATE_ACCOUNT,
  SEND_CREATE_ACCOUNT,
  HANDLE_LOGOUT,
  UPDATE_SUBSCRIBE_FIELD,
  CHANGE_FIELD_TREATMENT,
} from 'src/actions/authActions';

const initialState = {
  logged: false,
  loader: false,
  username: '',
  password: '',
  token: '',
  emailIsKnown: false,
  user: [],
  startRegistration: false,
  passwordNew: '',
  passwordCheck: '',
  firstname: '',
  lastname: '',
  targetMin: '',
  targetMax: '',
  treatment: '',
  doctorEmail: '',
  doctorName: '',
  logout: false,
};

const authReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_AUTH:
      return {
        ...state,
        loader: true,
      };
    case GET_LOADER_FALSE:
      return {
        ...state,
        loader: false,
      };
    case SEND_TEST_MAIL:
      return {
        ...state,
        loader: true,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
        loader: false,
      };
    case UPDATE_EMAIL_FIELD:
      return {
        ...state,
        username: action.newValue,
      };
    case TEST_EMAIL_KNOWN:
      return {
        ...state,
        emailIsKnown: action.newValue,
        loader: false,
      };
    case UPDATE_PASSWORD_FIELD:
      return {
        ...state,
        password: action.newValue,
      };
    case FETCH_USER_DATAS:
      return {
        ...state,
      };
    case SAVE_USER_DATAS:
      return {
        ...state,
        logged: true,
        user: action.newValue,
      };
    case START_REGISTRATION:
      return {
        ...state,
        startRegistration: !action.newValue,
      };
    case SEND_CREATE_ACCOUNT:
      return {
        ...state,
        loader: true,
      };
    case UPDATE_SUBSCRIBE_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };
    case CHANGE_FIELD_TREATMENT:
      return {
        ...state,
        treatment: action.newValue,
      };
    case CREATE_ACCOUNT:
      return {
        ...state,
        loader: false,
        password: state.passwordNew,
        user: action.newValue,
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        logged: false,
        loader: false,
        username: '',
        password: '',
        token: '',
        emailIsKnown: false,
        user: [],
        startRegistration: false,
        passwordNew: '',
        passwordCheck: '',
        firstname: '',
        lastname: '',
        targetMin: '',
        targetMax: '',
        treatment: '',
        doctorEmail: '',
        doctorName: '',
        logout: true,
      };
    default: return state;
  }
};

export default authReducers;
