import React from 'react';
import PropTypes from 'prop-types';

import './connexion.scss';

const Connexion = ({ username, password}) => (
  <div className="connexion">
    <h1>
      Connexion/Inscription
    </h1>
    <div className="connection">
      <form>
        <input type="email" name="email" id="email" value={username} />
        <input type="password" name="email" id="password" value={password} />
        <button type="submit"> Continuer</button>
      </form>
    </div>
  </div>
);

export default Connexion;
