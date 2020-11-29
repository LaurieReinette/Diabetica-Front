import axios from 'axios';
import { FETCH_NAV_DATAS, saveNavDatas } from 'src/actions/main';

const mainMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case FETCH_NAV_DATAS:
    //   axios.get('https://diabeticaback.lauriereinette.fr/api/navpages')
    //     .then((response) => {
    //     })
    //     .catch((error) => {
    //       console.warn(error);
    //     });
    // next(action);
    // break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default mainMiddleware;
