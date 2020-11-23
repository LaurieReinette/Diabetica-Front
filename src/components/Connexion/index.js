import React from 'react';
import PropTypes from 'prop-types';

import './connexion.scss';

import Connection from 'src/containers/Connection';

const Connexion = ({
  username,
  changeField,
  sendTestMail,
  emailIsKnown,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendTestMail();
  };
  const catchField = (evt) => {
    changeField(evt.target.value);
  };
  // const catchFieldPassword = (evt) => {
  //   console.log (evt.target.value);
  //   changeFieldPassword(evt.target.value);
  // };

  return (
    <div className="connexion">
      <h2>
        Connexion - Inscription
      </h2>
      <div className="connexion">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-mail">
            <label htmlFor="email">Entrer votre adresse mail: </label>
            <input type="email" name="email" id="email" value={username} onChange={catchField} />
          </div>
          <button type="submit"> Continuer</button>
        </form>
      </div>

      {emailIsKnown && <Connection />}
    </div>
  );
};

Connexion.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendAuth: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  sendTestMail: PropTypes.func.isRequired,
  emailIsKnown: PropTypes.bool.isRequired,
};

export default Connexion;
