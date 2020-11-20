import {
  SAVE_NAV_DATAS,
} from 'src/actions/main';

const initialState = {
  navDatas: [
    {
      route: '/',
      label: 'Accueil',
      id: 1,
    },
    {
      route: '/connexion-inscription',
      label: 'Connexion / Créer un compte',
      id: 2,
    },
    {
      route: '/a-propos',
      label: 'A propos',
      id: 3,
    },
  ],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_NAV_DATAS:
      return {
        ...state,
      };
    default: return state;
  }
};

export default mainReducer;
