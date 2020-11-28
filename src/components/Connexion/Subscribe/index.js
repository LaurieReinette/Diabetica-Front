import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './subscribe.scss';

const Subscribe = ({
  passwordNew,
  passwordCheck,
  firstname,
  lastname,
  treatment,
  targetMin,
  targetMax,
  doctorName,
  doctorEmail,
  loader,
  logged,
  // createAccount,
  sendCreateAccount,
  changeFieldPasswordNew,
  changeFieldPasswordCheck,
  changeFieldFirstname,
  changeFieldLastname,
  changeFieldTreatment,
  changeFieldTargetMin,
  changeFieldTargetMax,
  changeFieldDoctorName,
  changeFieldDoctorEmail,
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
  const catchFieldFirstname = (evt) => {
    changeFieldFirstname(evt.target.value);
  };
  const catchFieldLastname = (evt) => {
    changeFieldLastname(evt.target.value);
  };
  const catchTreatment = (evt) => {
    changeFieldTreatment(evt.target.value);
  };
  const catchFieldTargetMin = (evt) => {
    console.log(targetMin);
    changeFieldTargetMin(evt.target.value);
  };
  const catchFieldTargetMax = (evt) => {
    changeFieldTargetMax(evt.target.value);
  };
  const catchFieldDoctorName = (evt) => {
    changeFieldDoctorName(evt.target.value);
  };
  const catchFieldDoctorEmail = (evt) => {
    changeFieldDoctorEmail(evt.target.value);
  };

  return (
    <div className="subscribe">
      <h2>
        C'est parti, je crée un compte
      </h2>
      {logged && <Redirect to="/mon-compte" />}
      {!logged && (
      <div className="subscrire">
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="passwordNew">
              Entrer votre mot de passe:
              <input
                type="password"
                name="passwordNew"
                id="passwordNew"
                value={passwordNew}
                onChange={catchFieldpasswordNew}
              />
            </label>
          </div>
          <div>
            <label htmlFor="passwordCheck">
              Confirmez votre mot de passe:
              <input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                value={passwordCheck}
                onChange={catchFieldpasswordCheck}
              />
            </label>
          </div>
          <div>
            <label htmlFor="firstname">
              Prénom
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={firstname}
                onChange={catchFieldFirstname}
              />
            </label>
          </div>
          <div>
            <label htmlFor="lastname">
              Nom de famille
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={lastname}
                onChange={catchFieldLastname}
              />
            </label>
          </div>
          <p>Type de traitement</p>
          <div>
            <label htmlFor="treatment-yes">
              Insulino Requiérent
              <input
                type="radio"
                name="treatment-yes"
                id="treatment-yes"
                value="Insulino-requiérent"
                checked={treatment === 'Insulino-requiérent'}
                onChange={catchTreatment}
              />
            </label>
          </div>
          <div>
            <label htmlFor="treatment-non">
              Non Insulino requiérent
              <input
                type="radio"
                name="treatment-non"
                id="treatment-non"
                value="Non insulino-requiérent"
                checked={treatment === 'Non insulino-requiérent'}
                onChange={catchTreatment}
              />
            </label>
          </div>
          <div>
            <label htmlFor="targetMin">
              Glycémie minimum recommandée par mon médecin
              <input
                type="number"
                step="0.10"
                name="targetMin"
                id="targetMin"
                value={targetMin}
                onChange={catchFieldTargetMin}
              />
            </label>
          </div>
          <div>
            <label htmlFor="targetMax">Glycémie maximale recommandée par mon médecin 
              <input
                type="number"
                step="0.10"
                id="targetMax"
                value={targetMax}
                onChange={catchFieldTargetMax}
              />
            </label>
          </div>
          <div>
            <label htmlFor="doctorName">
              Nom de votre médecin
              <input
                type="text"
                placeholder="Pour Docteur Martin, entrez Martin"
                name="doctorName"
                id="doctorName"
                value={doctorName}
                onChange={catchFieldDoctorName}
              />
            </label>
          </div>
          <div>
            <label htmlFor="doctorEmail">
              Email de votre médecin
              <input
                type="email"
                name="doctorEmail"
                id="doctorEmail"
                value={doctorEmail}
                onChange={catchFieldDoctorEmail}
              />
            </label>
          </div>
          <button type="submit"> Je crée mon compte</button>
        </form>
      </div>
      )}
    </div>
  );
};

Subscribe.propTypes = {
  // changeField: PropTypes.func.isRequired,
  sendCreateAccount: PropTypes.func.isRequired,
  passwordNew: PropTypes.string.isRequired,
  loader: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  passwordCheck: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  treatment: PropTypes.string.isRequired,
  targetMin: PropTypes.string.isRequired,
  targetMax: PropTypes.string.isRequired,
  doctorName: PropTypes.string.isRequired,
  doctorEmail: PropTypes.string.isRequired,
  changeFieldPasswordNew: PropTypes.func.isRequired,
  changeFieldPasswordCheck: PropTypes.func.isRequired,
  changeFieldFirstname: PropTypes.func.isRequired,
  changeFieldLastname: PropTypes.func.isRequired,
  changeFieldTreatment: PropTypes.func.isRequired,
  changeFieldTargetMin: PropTypes.func.isRequired,
  changeFieldTargetMax: PropTypes.func.isRequired,
  changeFieldDoctorName: PropTypes.func.isRequired,
  changeFieldDoctorEmail: PropTypes.func.isRequired,
};

export default Subscribe;
