import axios from 'axios';
import {
  SEND_AUTH,
  saveToken,
  testEmailKnown,
  SEND_TEST_MAIL,
  saveUserDatas,
  fetchUserDatas,
  FETCH_USER_DATAS,
  startRegistration,
  SEND_CREATE_ACCOUNT,
  createAccount,
  sendAuth,
  getLoaderFalse,
} from 'src/actions/authActions';

import {
  saveBloodsugars,
} from 'src/actions/userActions';

import {
  saveError,
  getErrorDetectedFalse,
  emptyErrors,
} from 'src/actions/errorActions';

import { stringToFloatAndReplaceComaByPoint } from 'src/utils/functions';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_TEST_MAIL: {
      const { username } = store.getState().authReducer;

      axios.post('https://diabeticaback.lauriereinette.fr/api/login/check-email', {
        email: username,
      })
        .then((response) => {
          store.dispatch(testEmailKnown(response.data.known));
          store.dispatch(startRegistration(response.data.known));
          store.dispatch(emptyErrors());
          store.dispatch(getErrorDetectedFalse());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(saveError('L\'adresse mail n\'est pas valide'));
          store.dispatch(getLoaderFalse());
        });
      next(action);
      break;
    }
    case SEND_AUTH: {
      const { username, password } = store.getState().authReducer;

      axios.post('https://diabeticaback.lauriereinette.fr/api/login_check', {
        username,
        password,
      })
        .then((response) => {
          store.dispatch(saveToken(response.data.token));
          store.dispatch(fetchUserDatas());
          store.dispatch(getErrorDetectedFalse());
          store.dispatch(emptyErrors());
        })
        .catch((error) => {
          if (error.response.status === 401) {
            store.dispatch(saveError('Le mot de passe n\'est pas bon, veuillez réessayer'));
          }
          store.dispatch(getLoaderFalse());
        });
      next(action);
      break;
    }
    case FETCH_USER_DATAS: {
      const { token } = store.getState().authReducer;

      axios.get('https://diabeticaback.lauriereinette.fr/api/user', { headers: {'Authorization' : `Bearer ${token}`} })
        .then((response) => {
          store.dispatch(saveUserDatas(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(saveError('Une erreur s\'est produite, veuillez réessayer'));
          store.dispatch(getLoaderFalse());
        });
      axios.get('https://diabeticaback.lauriereinette.fr/api/user/fetch-bloodsugars', { headers: {'Authorization' : `Bearer ${token}`} })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveBloodsugars(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(saveError('Une erreur s\'est produite, veuillez réessayer'));
          store.dispatch(getLoaderFalse());
        });
      next(action);
      break;
    }
    case SEND_CREATE_ACCOUNT: {
      const { username } = store.getState().authReducer;
      const { passwordNew } = store.getState().authReducer;
      const { passwordCheck } = store.getState().authReducer;
      const { firstname } = store.getState().authReducer;
      const { lastname } = store.getState().authReducer;
      const { targetMin } = store.getState().authReducer;
      const { targetMax } = store.getState().authReducer;
      const { treatment } = store.getState().authReducer;
      const { doctorName } = store.getState().authReducer;
      const { doctorEmail } = store.getState().authReducer;

      axios.post('https://diabeticaback.lauriereinette.fr/api/login/signup', {
        email: username,
        password: passwordNew,
        checkPassword: passwordCheck,
        firstname,
        lastname,
        targetMin: stringToFloatAndReplaceComaByPoint(targetMin),
        targetMax: stringToFloatAndReplaceComaByPoint(targetMax),
        treatment,
        doctorEmail,
        doctorName,
      })
        .then((response) => {
          store.dispatch(createAccount(response.data));
          store.dispatch(sendAuth());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(saveError('Une erreur s\'est produite, veuillez réessayer'));
          store.dispatch(getLoaderFalse());
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
export default authMiddleware;
