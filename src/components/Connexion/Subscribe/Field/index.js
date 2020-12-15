// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  step,
  label,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}-subscribe`;

  return (
    <div className="fields-subscribe">
      <label
        htmlFor={inputId}
        className="field-label-subscribe"
      >
        {label}

        <input
        // React - state
          value={value}
          onChange={handleChange}
          // infos de base
          id={inputId}
          type={type}
          className="field-input-subscribe"
          placeholder={placeholder}
          name={name}
          step={step}
        />
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
};

// == Export
export default Field;
