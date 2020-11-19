import { connect } from 'react-redux';

import { fetchNavDatas } from 'src/actions/main';
import { sendAuth } from 'src/actions/authActions';
import Diabetica from 'src/components/Diabetica';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  fetchNavDatas: () => {
    dispatch(fetchNavDatas());
  },
  sendAuth: () => {
    dispatch(sendAuth());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Diabetica);
