import {
  SEND_AUTH,
  SAVE_TOKEN,

} from 'src/actions/authActions';

const initialState = {
  logged: false,
  username: 'tet@test.fr',
  password: 'olaola',
  token: '',
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
        token: action.token,
      };
    default: return state;
  }
};

export default authReducers;
