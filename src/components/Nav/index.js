import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({ navDatas, logged, navDatasLogged }) => {
  if (logged === false) {
    return (
      <nav className="nav">
        {navDatas.map((navData) => (
          <NavLink className="nav-item" activeClassName="nav-active" key={navData.id} to={navData.route}> {navData.label} </NavLink>
        ))}
      </nav>
    );
  }
  return (
    <nav className="nav">
      {navDatasLogged.map((navData) => (
        <NavLink className="nav-item" activeClassName="nav-active" key={navData.id} to={navData.route}> {navData.label} </NavLink>
      ))}
    </nav>
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
};
export default Nav;