export const GET_NAV_DATAS = 'GET_NAV_DATAS';

// === action creators
export const getNavDatas = (datas) => ({
  type: GET_NAV_DATAS,
  navDatas: datas,
});
