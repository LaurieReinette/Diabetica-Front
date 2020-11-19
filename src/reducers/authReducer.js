import {
  SEND_AUTH,
  SAVE_TOKEN,

} from 'src/actions/authActions';

const initialState = {
  logged: false,
  username: 'test@test.fr',
  password: 'olaola',
  backEndToken: '',
};

const authReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_AUTH:
      return {
        ...state,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        logged: true,
        backEndToken: token,
      };
    default: return state;
  }
};

export default authReducers;
