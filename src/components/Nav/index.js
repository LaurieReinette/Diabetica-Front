import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({
  navDatas,
  logged,
  navDatasLogged,
  handleLogout,
  logout,
}) => {
  if (logged === false) {
    return (
      <nav className="nav">
        {navDatas.map((navData) => (
          <NavLink
            className="nav-item"
            activeClassName="nav-active"
            key={navData.id}
            to={navData.route}
            exact
          >
            {navData.label}
          </NavLink>
        ))}
      </nav>
    );
  }
  return (
    <div>
      <nav className="nav">
        {navDatasLogged.map((navData) => (
          <NavLink
            className="nav-item"
            activeClassName="nav-active"
            key={navData.id}
            to={navData.route}
            exact
          >
            {navData.label}
          </NavLink>
        ))}
        <button
          type="button"
          className="login-form-button"
          onClick={handleLogout}
        >   Déconnexion
        </button>
      </nav>
      {logout && <Redirect to="/connexion-inscription" />}
    </div>
  );
};
Nav.propTypes = {
  navDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  navDatasLogged: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  logged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  logout: PropTypes.bool.isRequired,
};
export default Nav;
