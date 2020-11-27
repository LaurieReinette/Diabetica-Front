import { connect } from 'react-redux';

// === on importe le composant de présentation
import Subscribe from 'src/components/Connexion/Subscribe';

import {
  changeFieldPasswordNew,
  changeFieldPasswordCheck,
  changeFieldFirstname,
  changeFieldLastname,
  changeFieldTreatment,
  changeFieldTargetMin,
  changeFieldTargetMax,
  changeFieldDoctorName,
  changeFieldDoctorEmail,
  createAccount,

} from 'src/actions/authActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  username: state.authReducer.username,
  password: state.authReducer.password,
  token: state.authReducer.token,
  emailIsKnown: state.authReducer.emailIsKnown,
  logged: state.authReducer.logged,
  loader: state.authReducer.loader,
  passwordNew: state.authReducer.passwordNew,
  passwordCheck: state.authReducer.passwordCheck,
  firstname: state.authReducer.firstname,
  lastname: state.authReducer.lastname,
  treatment: state.authReducer.treatment,
  targetMin: state.authReducer.targetMin,
  targetMax: state.authReducer.targetMax,
  doctorName: state.authReducer.doctorName,
  doctorEmail: state.authReducer.doctorEmail,

  // nom de la prop à remplir : élément à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldPasswordNew: (newValue) => {
    dispatch(changeFieldPasswordNew(newValue));
  },
  changeFieldPasswordCheck: (newValue) => {
    dispatch(changeFieldPasswordCheck(newValue));
  },
  changeFieldFirstname: (newValue) => {
    dispatch(changeFieldFirstname(newValue));
  },
  changeFieldLastname: (newValue) => {
    dispatch(changeFieldLastname(newValue));
  },
  changeFieldTreatment: (newValue) => {
    dispatch(changeFieldTreatment(newValue));
  },
  changeFieldTargetMin: (newValue) => {
    dispatch(changeFieldTargetMin(newValue));
  },
  changeFieldTargetMax: (newValue) => {
    dispatch(changeFieldTargetMax(newValue));
  },
  changeFieldDoctorName: (newValue) => {
    dispatch(changeFieldDoctorName(newValue));
  },
  changeFieldDoctorEmail: (newValue) => {
    dispatch(changeFieldDoctorEmail(newValue));
  },
  sendCreateAccount: (newValue) => {
    dispatch(createAccount(newValue));
  },
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
