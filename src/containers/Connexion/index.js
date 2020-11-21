import { connect } from 'react-redux';

// === on importe le composant de présentation
import Connexion from 'src/components/Connexion';

import { sendAuth } from 'src/actions/authActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  username: state.authReducer.username,
  password: state.authReducer.password,
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  sendAuth: () => {
    dispatch(sendAuth());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
