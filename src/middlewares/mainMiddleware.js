import axios from 'axios';
import { GET_NAV_DATAS } from 'src/actions/main';

const mainMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware: ', action);
  switch (action.type) {
    case GET_NAV_DATAS:
      axios.get('http://localhost:8000/api/navpages')
        .then((response) => {
          // on dispatch une action pour pouvoir modifier le state
          console.log(response);
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
