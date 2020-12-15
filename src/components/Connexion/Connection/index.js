import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './connection.scss';


const Connection = ({
  password,
  sendAuth,
  changeFieldPassword,
  logged,
  username,
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
      <div className="connection-form">
        {logged && <Redirect to="/mon-compte" />}
        {!logged && (
          <form className="form" autoComplete="on" onSubmit={handleSubmit}>
            <div>
              Vous avez entré: {username}
            </div>
            <div className="form-password">
              <label htmlFor="password">
                Entrer votre mot de passe:
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={catchFieldPassword}
                />
              </label>
              <button type="submit"> Continuer</button>
            </div>
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
};

export default Connection;
