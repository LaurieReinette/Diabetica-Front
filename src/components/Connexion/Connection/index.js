import React from 'react';
import PropTypes from 'prop-types';

import './connection.scss';

import { Redirect } from 'react-router-dom';

const Connection = ({
  password,
  sendAuth,
  changeFieldPassword,
  logged,
  loader,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendAuth();
  };
  const catchFieldPassword = (evt) => {
    changeFieldPassword(evt.target.value);
  };

  return (
    <div className="connection">
      <h1>Entrez maintenant votre mot de passe</h1>
      <div className="connection-form">
        {logged && <Redirect to="/mon-compte" />}
        {!logged && (
          <form className="form" autoComplete="on" onSubmit={handleSubmit}>
            <div className="form-password">
              <label htmlFor="password">Entrer votre mot de passe: </label>
              <input type="password" name="password" id="password" value={password} onChange={catchFieldPassword} />
            </div>
            <button type="submit"> Continuer</button>
          </form>
        )}
      </div>
    </div>
  );
};

Connection.propTypes = {
  password: PropTypes.string.isRequired,
  sendAuth: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  changeFieldPassword: PropTypes.func.isRequired,
  loader: PropTypes.bool.isRequired,
};

export default Connection;
