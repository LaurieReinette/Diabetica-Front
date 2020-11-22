import React from 'react';
import PropTypes from 'prop-types';

import './connection.scss';

const Connection = ({ username, password, sendAuth, changeFieldPassword }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendAuth();
  };
  const catchFieldPassword = (evt) => {
    console.log (evt.target.value);
    changeFieldPassword(evt.target.value);
  };

  return (
    <div className="connection">
      <h1>Connexion - Votre mail est connu, entrez votre mot de passe</h1>
      <div className="connection">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-password">
            <label htmlFor="password">Entrer votre mot de passe: </label>
            <input type="password" name="password" id="password" value={password} onChange={catchFieldPassword} />
          </div>
          <button type="submit"> Continuer</button>
        </form>
      </div>
    </div>
  );
};

Connection.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendAuth: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  changeFieldPassword: PropTypes.func.isRequired,
};

export default Connection;
