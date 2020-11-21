import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './main.scss';

const Main = () => (
  <main className="main">
    <p className="requirement">
      Ce site internet a été developpé à des fins purement éducatives
      et n'est pas prévu pour servir de suivi aux personnes diabétiques
    </p>
    <h2> Avec Diabetica je peux gérer facilement mon diabète</h2>
    <ol>
      <li>Je crée un compte</li>
      <li>J'entre mes glyémies, Diabetica m'informe si elles sont trop hautes ou trop basses</li>
      <li>J'ai une vue d'ensemble de mes glycémies</li>
      <li>Je peux envoyer même envoyer mes résultats à mon médecin</li>
    </ol>
    <NavLink className="nav-item" activeClassName="nav-active" to="connexion-inscription"> Je m'inscris, c'est parti! </NavLink>

  </main>
);

export default Main;
