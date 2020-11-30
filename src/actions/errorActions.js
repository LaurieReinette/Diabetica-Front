export const DISPLAY_ERROR = 'DISPLAY_ERROR';

export const SAVE_ERROR = 'SAVE_ERROR';

export const GET_ERRORDETECTED_FALSE = 'GET_ERRORDETECTED_FALSE';

export const EMPTY_ERRORS = 'EMPTY_ERRORS';

export const saveError = (data) => ({
  type: SAVE_ERROR,
  data,
});

export const getErrorDetectedFalse = () => ({
  type: GET_ERRORDETECTED_FALSE,
});

export const emptyErrors = () => ({
  type: EMPTY_ERRORS,
});
