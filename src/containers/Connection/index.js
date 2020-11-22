import { connect } from 'react-redux';

// === on importe le composant de présentation
import Connection from 'src/components/Connexion/Connection';

import { sendAuth, updateEmailField, testEmailKnown, sendTestMail, updatePasswordField } from 'src/actions/authActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  username: state.authReducer.username,
  password: state.authReducer.password,
  token: state.authReducer.token,
  emailIsKnown: state.authReducer.emailIsKnown,
  logged: state.authReducer.logged,
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  // action qui sert à lancer l'authentification dans le middleware
  sendAuth: () => {
    dispatch(sendAuth());
  },
  // actoin qui gère le changement de valeur du champ email
  changeField: (newValue) => {
    dispatch(updateEmailField(newValue));
  },
  testEmailKnown: (newValue) => {
    dispatch(testEmailKnown(newValue));
  },
  sendTestMail: () => {
    dispatch(sendTestMail());
  },
  changeFieldPassword: (newValue) => {
    dispatch(updatePasswordField(newValue));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connection);
