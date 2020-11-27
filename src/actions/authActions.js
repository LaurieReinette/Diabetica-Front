export const SEND_AUTH = 'SEND_AUTH';

export const SAVE_TOKEN = 'SAVE_TOKEN';

export const UPDATE_EMAIL_FIELD = 'UPDATE_EMAIL_FIELD';

export const UPDATE_PASSWORD_FIELD = 'UPDATE_PASSWORD_FIELD';

export const TEST_EMAIL_KNOWN = 'TEST_EMAIL_KNOWN';

export const SEND_TEST_MAIL = 'SEND_TEST_MAIL';

export const FETCH_USER_DATAS = 'FETCH_USER_DATAS';

export const SAVE_USER_DATAS = 'SAVE_USER_DATAS';

export const START_REGISTRATION = 'START_REGISTRATION';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export const SEND_CREATE_ACCOUNT = 'SEND_CREATE_ACCOUNT';

export const CHANGE_FIELD_PASSWORDNEW = 'CHANGE_FIELD_PASSWORDNEW';

export const CHANGE_FIELD_PASSWORDCHECK = 'CHANGE_FIELD_PASSWORDCHECK';


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
export const saveUserDatas = (newValue) => ({
  type: SAVE_USER_DATAS,
  newValue,
});

export const fetchUserDatas = () => ({
  type: FETCH_USER_DATAS,
});

export const startRegistration = (newValue) => ({
  type: START_REGISTRATION,
  newValue,
});

export const sendCreateAccount = () => ({
  type: SEND_CREATE_ACCOUNT,
});

export const createAccount = (newValue) => ({
  type: CREATE_ACCOUNT,
  newValue,
});

export const changeFieldPasswordNew = (newValue) => ({
  type: CHANGE_FIELD_PASSWORDNEW,
  newValue,
});

export const changeFieldPasswordCheck = (newValue) => ({
  type: CHANGE_FIELD_PASSWORDCHECK,
  newValue,
});

