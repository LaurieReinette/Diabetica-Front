export const FETCH_NAV_DATAS = 'FETCH_NAV_DATAS';

export const SAVE_NAV_DATAS = 'SAVE_NAV_DATAS';

// === action creators
export const fetchNavDatas = () => ({
  type: FETCH_NAV_DATAS,

});

export const saveNavDatas = (datas) => ({
  type: SAVE_NAV_DATAS,
  datas,
});
