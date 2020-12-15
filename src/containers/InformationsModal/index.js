import { connect } from 'react-redux';

// === on importe le composant de présentation
import InformationsModal from 'src/components/Account/InformationsModal';

import {
  hideInformationsModal,
} from 'src/actions/userActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  informationsModal: state.userReducer.informationsModal,
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  hideInformationsModal: () => {
    dispatch(hideInformationsModal());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(InformationsModal);
