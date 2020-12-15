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

  return (
    <div className="connexion">
      <h2>
        Connexion - Inscription
      </h2>
      {!loader && !emailIsKnown && (
      <div className="connexion">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-mail">
            <label htmlFor="email">
              Entrer votre adresse mail:
              <input
                type="email"
                name="email"
                id="email"
                value={username}
                onChange={catchFieldEmail}
                required
              />
            </label>
            <button type="submit"> Continuer</button>
          </div>
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
  changeFieldEmail: PropTypes.func.isRequired,
  sendTestMail: PropTypes.func.isRequired,
  emailIsKnown: PropTypes.bool.isRequired,
  loader: PropTypes.bool.isRequired,
  startRegistration: PropTypes.bool.isRequired,
};

export default Connexion;
