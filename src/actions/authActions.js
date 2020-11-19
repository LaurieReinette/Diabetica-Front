export const SEND_AUTH = 'SEND_AUTH';

export const SAVE_TOKEN = 'SAVE_TOKEN';

// === action creators
export const sendAuth = () => ({
  type: SEND_AUTH,

});

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});
