import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import './bloodsugarform.scss';

const BloodsugarForm = ({
  date,
  hour,
  rate,
  correction,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      <form className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="date"
          placeholder="Date"
          type="date"
          onChange={changeField}
          value={date}
        />
        <Field
          name="hour"
          type="hour"
          placeholder="Heure"
          onChange={changeField}
          value={hour}
        />
        <Field
          name="rate"
          type="number"
          step="0.10"
          placeholder="Taux"
          onChange={changeField}
          value={rate}
        />
        <Field
          name="correction"
          type="text"
          placeholder="Correction effectuée"
          onChange={changeField}
          value={correction}
        />
        <button
          type="submit"
          className="login-form-button"
        >
          OK
        </button>
      </form>
    </div>
  );
};

BloodsugarForm.propTypes = {
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  rate: PropTypes.string.isRequired,
  correction: PropTypes.string.isRequired,
};

export default BloodsugarForm;
