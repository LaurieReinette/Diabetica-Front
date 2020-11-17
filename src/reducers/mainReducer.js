import {
  SAVE_NAV_DATAS,
} from 'src/actions/main';

const initialState = {
  navDatas: [],
};

const mainReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_NAV_DATAS:
      return {
        ...state,
        navDatas: action.datas,
      };
    default: return state;
  }
};

export default mainReducer;
