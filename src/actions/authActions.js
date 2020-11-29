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

export const CHANGE_FIELD_PASSWORDNEW = 'CHANGE_FIELD_PASSWORDNEW';

export const CHANGE_FIELD_PASSWORDCHECK = 'CHANGE_FIELD_PASSWORDCHECK';

export const CHANGE_FIELD_FIRSTNAME = 'CHANGE_FIELD_FIRSTNAME';

export const CHANGE_FIELD_LASTNAME = 'CHANGE_FIELD_LASTNAME';

export const CHANGE_FIELD_TREATMENT = 'CHANGE_FIELD_TREATMENT';

export const CHANGE_FIELD_TARGETMIN = 'CHANGE_FIELD_TARGETMIN';

export const CHANGE_FIELD_TARGETMAX = 'CHANGE_FIELD_TARGETMAX';

export const CHANGE_FIELD_DOCTORNAME = 'CHANGE_FIELD_DOCTORNAME';

export const CHANGE_FIELD_DOCTOREMAIL = 'CHANGE_FIELD_DOCTOREMAIL';

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

export const changeFieldPasswordNew = (newValue) => ({
  type: CHANGE_FIELD_PASSWORDNEW,
  newValue,
});

export const changeFieldPasswordCheck = (newValue) => ({
  type: CHANGE_FIELD_PASSWORDCHECK,
  newValue,
});

export const changeFieldFirstname = (newValue) => ({
  type: CHANGE_FIELD_FIRSTNAME,
  newValue,
});

export const changeFieldLastname = (newValue) => ({
  type: CHANGE_FIELD_LASTNAME,
  newValue,
});

export const changeFieldTreatment = (newValue) => ({
  type: CHANGE_FIELD_TREATMENT,
  newValue,
});

export const changeFieldTargetMin = (newValue) => ({
  type: CHANGE_FIELD_TARGETMIN,
  newValue,
});

export const changeFieldTargetMax = (newValue) => ({
  type: CHANGE_FIELD_TARGETMAX,
  newValue,
});

export const changeFieldDoctorName = (newValue) => ({
  type: CHANGE_FIELD_DOCTORNAME,
  newValue,
});

export const changeFieldDoctorEmail = (newValue) => ({
  type: CHANGE_FIELD_DOCTOREMAIL,
  newValue,
});
