import { connect } from 'react-redux';

// === on importe le composant de présentation
import Account from 'src/components/Account';

import { displayBloodsugarForm } from 'src/actions/userActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errorDetected: state.errorReducer.errorDetected,
  error: state.errorReducer.error,
  displayBloodsugarFormBool: state.userReducer.displayBloodsugarFormBool,
  bloodsugars: state.userReducer.bloodsugars,
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  displayBloodsugarForm: () => {
    dispatch(displayBloodsugarForm());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
