import { connect } from 'react-redux';

// === on importe le composant de présentation
import ConfirmedDeleteBloodsugar from 'src/components/Account/ConfirmedDeleteBloodsugar';

import {
  sendDeleteBloodsugar,
  hideConfirmDeleteBloodsugar,
} from 'src/actions/userActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  user: state.authReducer.user,
  errorDetected: state.errorReducer.errorDetected,
  error: state.errorReducer.error,
  displayBloodsugarFormBool: state.userReducer.displayBloodsugarFormBool,
  bloodsugars: state.userReducer.bloodsugars,
  bloodsugarId: state.userReducer.bloodsugarId,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  sendDeleteBloodsugar: () => {
    dispatch(sendDeleteBloodsugar());
  },
  hideConfirmDeleteBloodsugar: () => {
    dispatch(hideConfirmDeleteBloodsugar());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmedDeleteBloodsugar);
