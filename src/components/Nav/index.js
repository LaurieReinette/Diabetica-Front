import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({ navDatas }) => (
  <nav className="nav">
    {navDatas.map((navData) => (
      <NavLink className="nav-item" activeClassName="nav-active" key={navData.id} to={`/${navData.route}`}> {`${navData.label} -- `} </NavLink>
    ))}
  </nav>
);

export default Nav;
