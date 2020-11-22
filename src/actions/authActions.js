export const SEND_AUTH = 'SEND_AUTH';

export const SAVE_TOKEN = 'SAVE_TOKEN';

export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';

export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';

export const TEST_EMAIL_KNOWN = 'TEST_EMAIL_KNOWN';

export const SEND_TEST_MAIL = 'SEND_TEST_MAIL';

// === action creators
export const sendAuth = () => ({
  type: SEND_AUTH,
});

export const sendTestMail = () => ({
  type: SEND_TEST_MAIL,
});

export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});

export const updateEmailField = (newValue) => ({
  type: UPDATE_EMAIL_FIELD,
  newValue,
});

export const updatePasswordField = (newValue) => ({
  type: UPDATE_PASSWORD_FIELD,
  newValue,
});
export const testEmailKnown = (newValue) => ({
  type: TEST_EMAIL_KNOWN,
  newValue,
});