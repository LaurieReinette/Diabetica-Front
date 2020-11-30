import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ error }) => (
  <div className="error">
    <p> {error.map((errorToDisplay) => (
      errorToDisplay
    ))}
    </p>
  </div>

);

Error.propTypes = {
  error: PropTypes.array.isRequired,
};

export default Error;
