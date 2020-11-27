import React from 'react';
import PropTypes from 'prop-types';

import './connexion.scss';

import Connection from 'src/containers/Connection';
import Subscribe from 'src/containers/Subscribe';

import Loader from 'src/components/Loader';

const Connexion = ({
  username,
  changeFieldEmail,
  sendTestMail,
  emailIsKnown,
  loader,
  startRegistration,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendTestMail();
  };
  const catchFieldEmail = (evt) => {
    changeFieldEmail(evt.target.value);
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
      {!loader && !emailIsKnown && (
      <div className="connexion">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-mail">
            <label htmlFor="email">Entrer votre adresse mail: </label>
            <input type="email" name="email" id="email" value={username} onChange={catchFieldEmail} />
          </div>
          <button type="submit"> Continuer</button>
        </form>
      </div>
      )}
      {emailIsKnown && <Connection />}
      {loader && <Loader />}
      {!loader && startRegistration && <Subscribe /> }
    </div>
  );
};

Connexion.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendAuth: PropTypes.func.isRequired,
  changeFieldEmail: PropTypes.func.isRequired,
  sendTestMail: PropTypes.func.isRequired,
  emailIsKnown: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
  startRegistration: PropTypes.bool.isRequired,
};

export default Connexion;
