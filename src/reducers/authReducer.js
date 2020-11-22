import {
  SEND_AUTH,
  SAVE_TOKEN,
  UPDATE_EMAIL_FIELD,
  TEST_EMAIL_KNOWN,
  SEND_TEST_MAIL,

} from 'src/actions/authActions';

const initialState = {
  logged: false,
  username: '',
  password: '',
  token: '',
  emailIsKnown: false,
};

const authReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_AUTH:
      return {
        ...state,
      };
    case SEND_TEST_MAIL:
      return {
        ...state,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        logged: true,
        token: action.token,
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
      };

    default: return state;
  }
};

export default authReducers;
