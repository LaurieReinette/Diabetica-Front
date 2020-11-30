import {
} from 'src/actions/userActions';

const initialState = {
  bloodsugars: [],
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
