import React from 'react';
import PropTypes from 'prop-types';

import './connection.scss';

const Connection = ({ username, password, sendAuth, changeField }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendAuth();
  };
  const catchField = (evt) => {
    console.log (evt.target.value);
    changeField(evt.target.value);
  };

  return (
    <div className="Connection">
      <h1>
        Connection/Inscription
      </h1>
      <div className="connection">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Entrer votre adresse mail: </label>
          <input type="email" name="email" id="email" value={username} onChange={catchField} />
          <label htmlFor="password">Entrer votre mot de passe </label>
          <input type="password" name="password" id="password" value={password} onChange={catchField} />
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
};

export default Connection;
