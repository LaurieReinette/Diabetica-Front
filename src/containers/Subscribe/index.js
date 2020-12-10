import { connect } from 'react-redux';

// === on importe le composant de présentation
import Subscribe from 'src/components/Connexion/Subscribe';

import {
  changeFieldTreatment,
  createAccount,
  sendCreateAccount,
  updateSubscribeField,

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
  errorDetected: state.errorReducer.errorDetected,
  error: state.errorReducer.error,

  // nom de la prop à remplir : élément à récupérer dans le state
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateSubscribeField(newValue, name));
  },
  sendCreateAccount: () => {
    dispatch(sendCreateAccount());
  },
  createAccount: (newValue) => {
    dispatch(createAccount(newValue));
  },
  changeFieldTreatment: (newValue) => {
    dispatch(changeFieldTreatment(newValue));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
