export const UPDATE_BLOODSUGAR_FIELD = 'UPDATE_BLOODSUGAR_FIELD';
export const SEND_BLOODSUGAR = 'SEND_BLOODSUGAR';
export const DISPLAY_BLOODSUGAR_FORM = 'DISPLAY_BLOODSUGAR_FORM';
export const EMPTY_BLOODSUGAR_FORM = 'EMPTY_BLOODSUGAR_FORM';
export const SAVE_BLOODSUGARS = 'SAVE_BLOODSUGARS';

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
