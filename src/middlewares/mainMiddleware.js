import axios from 'axios';
import { FETCH_NAV_DATAS, saveNavDatas } from 'src/actions/main';

const mainMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_NAV_DATAS:
      axios.get('https://diabeticaback.lauriereinette.fr/api/navpages')
        .then((response) => {
          // on dispatch une action pour pouvoir modifier le state
          store.dispatch(saveNavDatas(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default mainMiddleware;
