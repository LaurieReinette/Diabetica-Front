export const UPDATE_BLOODSUGAR_FIELD = 'UPDATE_BLOODSUGAR_FIELD';
export const SEND_BLOODSUGAR = 'SEND_BLOODSUGAR';
export const DISPLAY_BLOODSUGAR_FORM = 'DISPLAY_BLOODSUGAR_FORM';
export const HIDE_BLOODSUGAR_FORM = 'HIDE_BLOODSUGAR_FORM';

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
export const hideBloodsugarForm = () => ({
  type: HIDE_BLOODSUGAR_FORM,
});
