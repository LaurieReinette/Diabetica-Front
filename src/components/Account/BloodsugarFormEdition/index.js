import React from 'react';
import PropTypes from 'prop-types';

import Field from './FieldEdit';
// import { useField } from './hooks';

import './bloodsugarform.scss';

const BloodsugarFormEdition = ({
  date,
  time,
  rate,
  correction,
  changeField,
  sendBloodsugarEdit,
  hideEditBloodsugarForm,
  bloodsugarToEdit,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    sendBloodsugarEdit();
  };
  const hideForm = () => {
    hideEditBloodsugarForm();
  };
  return (
    <div className="bloodsugarFormEdition">
      <div className="bloodsugarForm">
        <form className="login-form-element" onSubmit={handleSubmit}>
          <p>
            Modifier ma glycémie:
          </p>
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
            Modifier
          </button>
          <button
            type="button"
            className="login-form-button"
            onClick={hideForm}
          >
            Fermer
          </button>
        </form>
      </div>
    </div>
  );
};

BloodsugarFormEdition.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  rate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  correction: PropTypes.string.isRequired,
};

export default BloodsugarFormEdition;
