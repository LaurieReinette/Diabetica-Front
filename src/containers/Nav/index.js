import { connect } from 'react-redux';

// === on importe le composant de présentation
import Nav from 'src/components/Nav';
import { handleLogout } from 'src/actions/authActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  navDatas: state.mainReducer.navDatas,
  navDatasLogged: state.mainReducer.navDatasLogged,
  logged: state.authReducer.logged,
  logout: state.authReducer.logout,

  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(handleLogout());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
