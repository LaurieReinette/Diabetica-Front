export const DISPLAY_ERROR = 'DISPLAY_ERROR';

export const SAVE_ERROR = 'FETCH_ERROR';

export const saveError = (error) => ({
  type: SAVE_ERROR,
  error,
});
