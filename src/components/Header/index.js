import React from 'react';
import PropTypes from 'prop-types';
import favicon from 'src/assets/favicon.ico';

import './header.scss';

const Header = () => (
  <header className="header">
    <h1> <img className="diabetica-logo" src={favicon} alt="logo diabetica" />Diabetica  </h1>
    <h2>Gestion facile et rapide de votre diabète</h2>
  </header>
);

export default Header;
