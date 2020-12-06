import { connect } from 'react-redux';

// === on importe le composant de présentation
import Account from 'src/components/Account';

import {
  displayBloodsugarForm,
  editBloodsugarIdToDelete,
  sendDeleteBloodsugar,
  editBloodsugarInState,
} from 'src/actions/userActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errorDetected: state.errorReducer.errorDetected,
  error: state.errorReducer.error,
  displayBloodsugarFormBool: state.userReducer.displayBloodsugarFormBool,
  bloodsugars: state.userReducer.bloodsugars,
  bloodsugarId: state.userReducer.bloodsugarId,
  displayConfirmDeleteBloodsugar: state.userReducer.displayConfirmDeleteBloodsugar,
  logout: state.authReducer.logout,
  bloodsugarToEdit: state.userReducer.bloodsugarToEdit,
  displayEditBloodsugar: state.userReducer.displayEditBloodsugar

  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  displayBloodsugarForm: () => {
    dispatch(displayBloodsugarForm());
  },
  editBloodsugarIdToDelete: (bloodsugarId) => {
    dispatch(editBloodsugarIdToDelete(bloodsugarId));
  },
  sendDeleteBloodsugar: () => {
    dispatch(sendDeleteBloodsugar());
  },
  editBloodsugarInState: (bloodsugar) => {
    dispatch(editBloodsugarInState(bloodsugar));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
