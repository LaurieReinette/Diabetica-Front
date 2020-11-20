import React from 'react';
import PropTypes from 'prop-types';

import './connexion.scss';

const Connexion = () => (
  <div className="connexion">

    <h1>
      Connexion/Inscription
    </h1>
    <p>
      <form className="form-connexion">
        <input type="email" name="connexion" id="connexion" />
      </form>
    </p>
  </div>
);

export default Connexion;
