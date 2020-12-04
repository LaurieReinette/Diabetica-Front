import { connect } from 'react-redux';

// === on importe le composant de présentation
import Account from 'src/components/Account';

import {
  displayBloodsugarForm,
  editBloodsugarId,
  sendDeleteBloodsugar,
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
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  displayBloodsugarForm: () => {
    dispatch(displayBloodsugarForm());
  },
  editBloodsugarId: (bloodsugarId) => {
    dispatch(editBloodsugarId(bloodsugarId));
  },
  sendDeleteBloodsugar: () => {
    dispatch(sendDeleteBloodsugar());
  },
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
