export const UPDATE_BLOODSUGAR_FIELD = 'UPDATE_BLOODSUGAR_FIELD';
export const SEND_BLOODSUGAR = 'SEND_BLOODSUGAR';
export const DISPLAY_BLOODSUGAR_FORM = 'DISPLAY_BLOODSUGAR_FORM';
export const EMPTY_BLOODSUGAR_FORM = 'EMPTY_BLOODSUGAR_FORM';
export const SAVE_BLOODSUGARS = 'SAVE_BLOODSUGARS';
export const EDIT_REDUCER_BLOODSUGAR_TO_DELETE = 'EDIT_REDUCER_BLOODSUGAR_TO_DELETE';
export const DELETE_BLOODSUGAR = 'DELETE_BLOODSUGAR';
export const DISPLAY_CONFIRM_DELETE_BLOODSUGAR = 'DISPLAY_CONFIRM_DELETE_BLOODSUGAR';
export const HIDE_CONFIRM_DELETE_BLOODSUGAR = 'HIDE_CONFIRM_DELETE_BLOODSUGAR';
export const EDIT_BLOODSUGAR_INSTATE = 'EDIT_BLOODSUGAR_INSTATE';

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
export const editBloodsugarIdToDelete = (bloodsugarId) => ({
  type: EDIT_REDUCER_BLOODSUGAR_TO_DELETE,
  bloodsugarId,
});
export const sendDeleteBloodsugar = () => ({
  type: DELETE_BLOODSUGAR,
});

export const displayConfirmDeleteBloodsugar = () => ({
  type: DISPLAY_CONFIRM_DELETE_BLOODSUGAR,
});
export const hideConfirmDeleteBloodsugar = () => ({
  type: HIDE_CONFIRM_DELETE_BLOODSUGAR,
});
export const editBloodsugarInState = (bloodsugar) => ({
  type: EDIT_BLOODSUGAR_INSTATE,
  bloodsugar,
});
