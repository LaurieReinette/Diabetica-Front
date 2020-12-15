//InformationsModal

import React from 'react';
import PropTypes from 'prop-types';

import './informationsmodal.scss';

const InformationsModal = ({
  informationsModal,
  hideInformationsModal,
}) => {
  const hide = () => {
    hideInformationsModal();
  };
  return (
    <main className="informationsmodal">
      <button type="button" onClick={hide}>
        Fermer
      </button>
      <p className="card">
        { informationsModal }
      </p>
    </main>
  );
};
export default InformationsModal;
