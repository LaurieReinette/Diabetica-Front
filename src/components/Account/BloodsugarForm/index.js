import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import './bloodsugarform.scss';

const BloodsugarForm = ({
  date,
  time,
  rate,
  correction,
  changeField,
  handleSendBloodsugar,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSendBloodsugar();
  };

  return (
    <div className="bloodsugarForm">
      <form className="login-form-element" onSubmit={handleSubmit}>
        <Field
          name="date"
          placeholder="Date"
          type="date"
          onChange={changeField}
          value={date}
        />
        <Field
          name="time"
          type="time"
          placeholder="Heure"
          onChange={changeField}
          value={time}
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
          Ajouter
        </button>
      </form>
    </div>
  );
};

BloodsugarForm.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSendBloodsugar: PropTypes.func.isRequired,
  rate: PropTypes.string.isRequired,
  correction: PropTypes.string.isRequired,
};

export default BloodsugarForm;
