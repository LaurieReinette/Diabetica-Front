import axios from 'axios';
import {
  SEND_AUTH,
  saveToken,
  TEST_EMAIL_KNOWN,
  testEmailKnown,
  SEND_TEST_MAIL,
  saveUserDatas,
  SAVE_USER_DATAS,
  fetchUserDatas,
  FETCH_USER_DATAS,
} from 'src/actions/authActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_AUTH: {
      const { username, password } = store.getState().authReducer;

      axios.post('https://127.0.0.1:8000/api/login_check', {
        username,
        password,
      })
        .then((response) => {
          console.log(response.data.token);
          // on dispatch une action pour pouvoir modifier le state
          store.dispatch(saveToken(response.data.token));
          store.dispatch(fetchUserDatas());
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case SEND_TEST_MAIL: {
      const { username } = store.getState().authReducer;

      axios.post('https://127.0.0.1:8000/api/login/check-email', {
        email: username,
      })
        .then((response) => {
          console.log(response.data.known);
          // on dispatch une action pour pouvoir modifier le state
          store.dispatch(testEmailKnown(response.data.known));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    case FETCH_USER_DATAS: {
      const { token } = store.getState().authReducer;

      axios.get('https://127.0.0.1:8000/api/user', { headers: {'Authorization' : `Bearer ${token}`} })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveUserDatas(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default authMiddleware;
