import React from 'react';
import PropTypes from 'prop-types';

import './subscribe.scss';

const Subscribe = ({ username, password, sendAuth, changeField, sendTestMail }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendTestMail();
  };
  const catchField = (evt) => {
    console.log (evt.target.value);
    changeField(evt.target.value);
  };

  return (
    <div className="Subscribe">
      <h2>
        C'est parti, je crée un compte
      </h2>
      <div className="subscrire">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Entrer votre adresse mail: </label>
          <input type="email" name="email" id="email" value={username} onChange={catchField} />
          {/* <label htmlFor="password">Entrer votre adresse mail: </label>
          <input type="password" name="password" id="password" value={password} /> */}
          <button type="submit"> Continuer</button>
        </form>
      </div>
    </div>
  );
};

Subscribe.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendAuth: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  sendTestMail: PropTypes.func.isRequired,
};

export default Subscribe;
