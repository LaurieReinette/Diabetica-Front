import React from 'react';
import PropTypes from 'prop-types';

import './connexion.scss';

const Connexion = () => (
  <div className="connexion">

    <h1>
      Connexion/Inscription
    </h1>
    <form className="form-connexion">
      <input type="email" name="connexion" id="connexion" />
    </form>
  </div>
);

export default Connexion;
