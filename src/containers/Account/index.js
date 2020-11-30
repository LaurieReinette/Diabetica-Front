import { connect } from 'react-redux';

// === on importe le composant de présentation
import Account from 'src/components/Account';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errorDetected: state.errorReducer.errorDetected,
  error: state.errorReducer.error,
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
