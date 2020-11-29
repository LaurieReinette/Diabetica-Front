import React from 'react';
import PropTypes from 'prop-types';

import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';

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
