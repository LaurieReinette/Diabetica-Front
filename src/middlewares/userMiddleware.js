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
  DELETE_BLOODSUGAR,
  SEND_BLOODSUGAR_EDIT,
  hideEditBloodsugarForm,
  SEND_BLOODSUGARS_TO_DOCTOR,
  writeInformationsModal,
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
    case SEND_BLOODSUGAR_EDIT: {
      const { token } = store.getState().authReducer;
      const { bloodsugarToEdit } = store.getState().userReducer;
      const { date } = store.getState().userReducer;
      const { time } = store.getState().userReducer;
      const { rate } = store.getState().userReducer;
      const { correction } = store.getState().userReducer;

      axios.post(`https://diabeticaback.lauriereinette.fr/api/bloodsugar/edit/${bloodsugarToEdit.id}`, {
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
          store.dispatch(hideEditBloodsugarForm());
          store.dispatch(writeInformationsModal('Glycémie modifidiée'));
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

      axios.delete(`https://diabeticaback.lauriereinette.fr/api/bloodsugar/delete/${bloodsugarId}`, {
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
    case SEND_BLOODSUGARS_TO_DOCTOR: {
      const { token } = store.getState().authReducer;

      axios.get('https://diabeticaback.lauriereinette.fr/api/bloodsugar/sendtodoctor', {
        headers: {'Authorization' : `Bearer ${token}`},
      })
        .then((response) => {
          console.log('email envoyé');
          store.dispatch(writeInformationsModal('Email envoyé'));
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
