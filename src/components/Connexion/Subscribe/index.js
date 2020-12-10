import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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

  // createAccount,
  sendCreateAccount,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendCreateAccount();
  };
  const catchTreatment = (evt) => {
    changeFieldTreatment(evt.target.value);
  };

  return (
    <div className="subscribe">
      <h2>
        C'est parti, je crée un compte
      </h2>
      <p>* champ obligatoire</p>
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
            required
          />
          <Field
            name="passwordCheck"
            placeholder="Confirmez votre mot de passe"
            type="password"
            onChange={changeField}
            value={passwordCheck}
            required
          />
          <Field
            name="firstname"
            type="text"
            placeholder="Prénom"
            onChange={changeField}
            value={firstname}
            required
          />
          <Field
            name="lastname"
            type="text"
            placeholder="Nom de famille"
            onChange={changeField}
            value={lastname}
            required
          />

          <p className="treatment-type-form">Type de traitement*</p>*
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
          <Field
            name="targetMin"
            type="text"
            placeholder="Cible Minimale"
            onChange={changeField}
            value={targetMin}
            required
          />
          <Field
            name="targetMax"
            type="text"
            placeholder="Cible Maximale"
            onChange={changeField}
            value={targetMax}
            required
          />
          <Field
            name="doctorName"
            type="text"
            placeholder="Nom du médecin"
            onChange={changeField}
            value={doctorName}
            required
          />
          <Field
            name="doctorEmail"
            type="email"
            placeholder="Email du médecin"
            onChange={changeField}
            value={doctorEmail}
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
