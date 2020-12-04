import React from 'react';

import './confirmedDeleteBloodsugar.scss';

const ConfirmedDeleteBloodsugar = ({
  displayConfirmDeleteBloodsugar,
  sendDeleteBloodsugar,
  hideConfirmDeleteBloodsugar,
}) => {
  const goDelete = () => {
    sendDeleteBloodsugar();
  };
  const hide = () => {
    hideConfirmDeleteBloodsugar();
  };
  return (
    <div className="confirmedDeleteBloodsugar">
      <div className="card">
        <p> Êtes vous sûr de vouloir supprimer cette glycémie ?</p>
        <button type="button" onClick={goDelete}>
          Oui
        </button>
        <button type="button" onClick={hide}>
          Non
        </button>
      </div>
    </div>
  );
};
export default ConfirmedDeleteBloodsugar;
