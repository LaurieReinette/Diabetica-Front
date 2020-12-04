export const UPDATE_BLOODSUGAR_FIELD = 'UPDATE_BLOODSUGAR_FIELD';
export const SEND_BLOODSUGAR = 'SEND_BLOODSUGAR';
export const DISPLAY_BLOODSUGAR_FORM = 'DISPLAY_BLOODSUGAR_FORM';
export const EMPTY_BLOODSUGAR_FORM = 'EMPTY_BLOODSUGAR_FORM';
export const SAVE_BLOODSUGARS = 'SAVE_BLOODSUGARS';
export const EDIT_BLOODSUGAR = 'EDIT_BLOODSUGAR';
export const DELETE_BLOODSUGAR = 'DELETE_BLOODSUGAR';

export const updateBloodsugarField = (newValue, name) => ({
  type: UPDATE_BLOODSUGAR_FIELD,
  newValue,
  name,
});

export const sendBloodsugar = () => ({
  type: SEND_BLOODSUGAR,
});

export const displayBloodsugarForm = () => ({
  type: DISPLAY_BLOODSUGAR_FORM,
});
export const saveBloodsugars = (datas) => ({
  type: SAVE_BLOODSUGARS,
  datas,
});
export const emptyBloodsugarForm = () => ({
  type: EMPTY_BLOODSUGAR_FORM,
});
export const editBloodsugarId = (bloodsugarId) => ({
  type: EDIT_BLOODSUGAR,
  bloodsugarId,
});
export const sendDeleteBloodsugar = () => ({
  type: DELETE_BLOODSUGAR,
});

