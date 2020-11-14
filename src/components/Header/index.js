import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = () => (
  <header className="header">
    <h1>Diabetica - Gestion facile et rapide de votre diabète</h1>
    <br/>
    <nav>
      <a href="#">Accueil</a> -
      <a href="#">Mon compte</a> -
      <a href="#">A propos</a>
    </nav>
  </header>
);

export default Header;
