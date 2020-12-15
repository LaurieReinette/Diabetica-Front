import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { checkPasswordLenght, checkBothPasswords } from 'src/utils/functions';


import Field from './Field';
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
  changeField,
  changeFieldTreatment,
  saveError,
  getErrorDetectedFalse,
  emptyErrors,

  // createAccount,
  sendCreateAccount,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (checkPasswordLenght(passwordNew) && checkBothPasswords(passwordNew, passwordCheck)) {
      sendCreateAccount();
    }
    else if (!checkPasswordLenght(passwordNew)) {
      window.scrollTo(0, 0);
      saveError('Le mot de passe est trop court');
    }
    else if (!checkBothPasswords(passwordNew, passwordCheck)) {
      window.scrollTo(0, 0);
      saveError(' Les mots de passe ne correspondent pas');
    }
  };
  const catchTreatment = (evt) => {
    changeFieldTreatment(evt.target.value);
  };

  return (
    <div className="subscribe">
      <h2>
        C'est parti, je crée un compte
      </h2>
      <p>* champs obligatoires</p>
      {logged && <Redirect to="/mon-compte" />}
      {!logged && (
      <div className="subscrire-div">
        <form className="form" onSubmit={handleSubmit}>
          <Field
            name="passwordNew"
            placeholder="Mot de passe"
            type="password"
            onChange={changeField}
            value={passwordNew}
            label="Mot de passe*"
            required
          />
          <Field
            name="passwordCheck"
            placeholder="Confirmez votre mot de passe"
            type="password"
            onChange={changeField}
            value={passwordCheck}
            label="Confirmez votre mot de passe*"
            required
          />
          <Field
            name="firstname"
            type="text"
            placeholder="Prénom"
            onChange={changeField}
            value={firstname}
            label="Prénom*"
            required
          />
          <Field
            name="lastname"
            type="text"
            placeholder="Nom de famille"
            onChange={changeField}
            value={lastname}
            label="Nom de famille*"
            required
          />

          <div className="treatment-labels">
          <p className="treatment-type-form">Type de traitement*</p>
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
              <label htmlFor="treatment-no">
                Non Insulino requiérent
                <input
                  type="radio"
                  name="treatment-no"
                  id="treatment-no"
                  value="Non insulino-requiérent"
                  checked={treatment === 'Non insulino-requiérent'}
                  onChange={catchTreatment}
                />
              </label>
            </div>
          </div>
          <Field
            name="targetMin"
            type="number"
            step="0.10"
            placeholder="Cible minimale"
            onChange={changeField}
            value={targetMin}
            label="Cible minimale recommandée par votre médecin (g/L)*"
            required
          />
          <Field
            name="targetMax"
            type="number"
            placeholder="Cible maximale"
            onChange={changeField}
            value={targetMax}
            step="0.10"
            label="Cible maximale recommandée par votre médecin (g/L)*"
            required
          />
          <Field
            name="doctorName"
            type="text"
            placeholder="Pour Dr Martin, écrire Martin"
            onChange={changeField}
            value={doctorName}
            label="Nom du médecin"
            required
          />
          <Field
            name="doctorEmail"
            type="email"
            placeholder="Email du médecin"
            onChange={changeField}
            value={doctorEmail}
            label="Email du médecin"
            required
          />
          <button type="submit"> Je crée mon compte</button>
        </form>
      </div>
      )}
    </div>
  );
};

Subscribe.propTypes = {
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
};

export default Subscribe;
