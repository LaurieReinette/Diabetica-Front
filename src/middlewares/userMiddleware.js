import axios from 'axios';

import {
  getLoaderFalse,
  saveUserDatas,
} from 'src/actions/authActions';

import {
  saveError,
  getErrorDetectedFalse,
  emptyErrors,
} from 'src/actions/errorActions';

import { stringToFloatAndReplaceComaByPoint } from 'src/utils/functions';

import {
  SEND_BLOODSUGAR,
  emptyBloodsugarForm,
  saveBloodsugars,
  sendDeleteBloodsugar,
  DELETE_BLOODSUGAR,
} from '../actions/userActions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_BLOODSUGAR: {
      const { token } = store.getState().authReducer;
      const { date } = store.getState().userReducer;
      const { time } = store.getState().userReducer;
      const { rate } = store.getState().userReducer;
      const { correction } = store.getState().userReducer;

      axios.post('https://diabeticaback.lauriereinette.fr/api/user/bloodsugar/add', {
        date,
        time,
        rate: stringToFloatAndReplaceComaByPoint(rate),
        correction,
      }, {
        headers: {'Authorization' : `Bearer ${token}`},
      })
        .then((response) => {
          store.dispatch(saveBloodsugars(response.data));
          store.dispatch(emptyBloodsugarForm());
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(saveError('Une erreur s\'est produite, veuillez rééssayer'));
          store.dispatch(getLoaderFalse());
        });
      next(action);
      break;
    }
    case DELETE_BLOODSUGAR: {
      const { token } = store.getState().authReducer;
      const { bloodsugarId } = store.getState().userReducer;

      axios.delete(`https://diabeticaback.lauriereinette.fr/api/delete/${bloodsugarId}`, {
        headers: {'Authorization' : `Bearer ${token}`},
      })
        .then((response) => {
          store.dispatch(saveBloodsugars(response.data));
        })
        .catch((error) => {
          console.warn(error);
          store.dispatch(saveError('Une erreur s\'est produite, veuillez rééssayer'));
          store.dispatch(getLoaderFalse());
        });
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default userMiddleware;
