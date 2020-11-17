import React from 'react';
import PropTypes from 'prop-types';

import './nav.scss';

const Nav = ({ navDatas }) => (
  <nav className="nav">
    {navDatas.map((navData) => (
      <a href="#"
        key={navData.label}
        // className="nav-item"
      >
        {`${navData.label} -- `}
      </a>
    ))}
  </nav>
);

export default Nav;
