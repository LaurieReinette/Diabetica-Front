import {
  GET_NAV_DATAS,
} from 'src/actions/main';

const initialState = {
  logged: false,
  navDatas: [],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NAV_DATAS:
      return {
        ...state,
        navDatas: action.navDatas,
      };
    default: return state;
  }
};

export default mainReducer;
