import { connect } from 'react-redux';

import { getNavDatas } from 'src/actions/main';

import Diabetica from 'src/components/Diabetica';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  getNavDatas: () => {
    dispatch(getNavDatas());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Diabetica);
