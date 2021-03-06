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
export const HIDE_EDIT_BLOODSUGAR_FORM = 'HIDE_EDIT_BLOODSUGAR_FORM';
export const SEND_BLOODSUGAR_EDIT = 'SEND_BLOODSUGAR_EDIT';
export const SEND_BLOODSUGARS_TO_DOCTOR = 'SEND_BLOODSUGARS_TO_DOCTOR';
export const HIDE_INFORMATIONS_MODAL = 'HIDE_INFORMATIONS_MODAL';
export const WRITE_INFORMATIONS_MODAL = 'WRITE_INFORMATIONS_MODAL';



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
export const hideEditBloodsugarForm = () => ({
  type: HIDE_EDIT_BLOODSUGAR_FORM,
});

export const sendBloodsugarEdit = () => ({
  type: SEND_BLOODSUGAR_EDIT,
});
export const sendBloodsugarsToDoctor = () => ({
  type: SEND_BLOODSUGARS_TO_DOCTOR,
});
export const hideInformationsModal = () => ({
  type: HIDE_INFORMATIONS_MODAL,
});
export const writeInformationsModal = (message) => ({
  type: WRITE_INFORMATIONS_MODAL,
  message,
});
