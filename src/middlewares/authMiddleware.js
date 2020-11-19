import axios from 'axios';
import { SEND_AUTH, saveToken } from 'src/actions/authActions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_AUTH: {
      const { username, password } = store.getState().authReducer;

      axios.post('https://diabeticaback.lauriereinette.fr/api/login_check', {
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
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default authMiddleware;
