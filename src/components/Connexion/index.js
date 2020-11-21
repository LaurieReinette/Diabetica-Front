import React from 'react';
import PropTypes from 'prop-types';

import './connexion.scss';

const Connexion = ({ username, password, sendAuth}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendAuth();
  };
  return (
    <div className="connexion">
      <h1>
        Connexion/Inscription
      </h1>
      <div className="connection">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Entrer votre adresse mail: </label>
          <input type="email" name="email" id="email" value={username} />
          <label htmlFor="password">Entrer votre adresse mail: </label>
          <input type="password" name="password" id="password" value={password} />
          <button type="submit"> Continuer</button>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
