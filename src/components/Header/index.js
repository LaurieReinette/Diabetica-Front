import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ navDatas }) => (
  <header className="header">
    <h1>Diabetica - Gestion facile et rapide de votre diabète</h1>
    <br/>
    <nav>
      {navDatas.map((navData) => (
        <a href="#"
          key={navData.label}
          // className="nav-item"
        >
          {`${navData.label} -- `}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
