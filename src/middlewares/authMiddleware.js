import axios from 'axios';
import { SEND_AUTH, saveToken, TEST_EMAIL_KNOWN, testEmailKnown, SEND_TEST_MAIL } from 'src/actions/authActions';

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
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
