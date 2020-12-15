export const SEND_AUTH = 'SEND_AUTH';

export const GET_LOADER_FALSE = 'GET_LOADER_FALSE';

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

export const UPDATE_SUBSCRIBE_FIELD = 'UPDATE_SUBSCRIBE_FIELD';

export const CHANGE_FIELD_TREATMENT = 'CHANGE_FIELD_TREATMENT';

export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

// === action creators
export const sendAuth = () => ({
  type: SEND_AUTH,
});

export const getLoaderFalse = () => ({
  type: GET_LOADER_FALSE,
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

export const updateSubscribeField = (newValue, name) => ({
  type: UPDATE_SUBSCRIBE_FIELD,
  newValue,
  name,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const changeFieldTreatment = (newValue) => ({
  type: CHANGE_FIELD_TREATMENT,
  newValue,
});
