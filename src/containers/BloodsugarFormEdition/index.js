import { connect } from 'react-redux';

// === on importe le composant de présentation
import BloodsugarFormEdition from 'src/components/Account/BloodsugarFormEdition';

import {
  sendBloodsugar,
  updateBloodsugarField,
  hideEditBloodsugarForm,
} from 'src/actions/userActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
  date: state.userReducer.date,
  time: state.userReducer.time,
  rate: state.userReducer.rate,
  correction: state.userReducer.correction,
  displayBloodsugarFormBool: state.userReducer.displayBloodsugarFormBool,
  hideEditBloodsugarForm: state.userReducer.hideEditBloodsugarForm,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    dispatch(updateBloodsugarField(newValue, name));
  },
  handleSendBloodsugar: () => {
    dispatch(sendBloodsugar());
  },
  hideEditBloodsugarForm: () => {
    dispatch(hideEditBloodsugarForm());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BloodsugarFormEdition);
