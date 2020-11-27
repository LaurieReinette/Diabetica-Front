import React from 'react';
import PropTypes from 'prop-types';

import './subscribe.scss';

const Subscribe = ({
  passwordNew,
  passwordCheck,
  // createAccount,
  // sendCreateAccount,
  changeFieldPasswordNew,
  changeFieldPasswordCheck,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendCreateAccount();
  };
  const catchFieldpasswordNew = (evt) => {
    changeFieldPasswordNew(evt.target.value);
  };
  const catchFieldpasswordCheck = (evt) => {
    changeFieldPasswordCheck(evt.target.value);
  };

  return (
    <div className="subscribe">
      <h2>
        C'est parti, je crée un compte
      </h2>
      <div className="subscrire">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="password-new">Entrer votre mot de passe: </label>
          <input
            type="password"
            name="password-new"
            id="password-new"
            value={passwordNew}
            onChange={catchFieldpasswordNew}
          />
          <label htmlFor="passwordCheck">Confirmez votre mot de passe: </label>
          <input
            type="password"
            name="passwordCheck"
            id="passwordCheck"
            value={passwordCheck}
            onChange={catchFieldpasswordCheck}
          />
          {/* <label htmlFor="firstname">Prénom </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstname}
            onChange={catchFieldFirstname}
          />
          <label htmlFor="lastname">Nom de famille </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={catchFieldLastname}
          />

          <label htmlFor="firstname">Type de diabète </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={catchFieldLastname}
          />
          <label htmlFor="targetMin">Glycémie minimum recommandée par mon médecin </label>
          <input
            type="number"
            step="0.10"
            name="targetMin"
            id="targetMin"
            value={targetMin}
            onChange={catchFieldTargetMin}
          />
          <label htmlFor="targetMax">Glycémie maximum recommandée par mon médecin </label>
          <input
            type="number"
            step="0.10"
            id="targetMax"
            value={targetMax}
            onChange={catchFieldTargetMax}
          />
          <label htmlFor="doctorName">Nom de votre médecin</label>
          <input
            type="text"
            placeholder="Pour Docteur Martin, entrez Martin"
            name="doctorName"
            id="doctorName"
            value={doctorName}
            onChange={catchFieldDoctorName}
          />
          <label htmlFor="doctorEmail">Email de votre médecin </label>
          <input
            type="email"
            name="doctorEmail"
            id="doctorEmail"
            value={doctorEmail}
            onChange={catchFieldDoctorEmail}
          /> */}
          <button type="submit"> Je crée mon compte</button>
        </form>
      </div>
    </div>
  );
};

Subscribe.propTypes = {
  // changeField: PropTypes.func.isRequired,
  // sendCreateAccount: PropTypes.func.isRequired,
  passwordNew: PropTypes.string.isRequired,
  changeFieldPasswordNew: PropTypes.func.isRequired,
  changeFieldPasswordCheck: PropTypes.func.isRequired,
};

export default Subscribe;
