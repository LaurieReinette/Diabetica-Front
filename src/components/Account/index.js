import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import classNames from 'classnames';

import BloodsugarForm from 'src/containers/BloodsugarForm';
import BloodsugarFormEdition from 'src/containers/BloodsugarFormEdition';
import ConfirmedDeleteBloodsugar from 'src/containers/ConfirmedDeleteBloodsugar';
import InformationsModal from 'src/containers/InformationsModal';

import trash from 'src/assets/images/trash.png';
import edition from 'src/assets/images/edition.png';

import './account.scss';

const Account = ({
  user,
  bloodsugars,
  displayBloodsugarFormBool,
  displayBloodsugarForm,
  editBloodsugarIdToDelete,
  sendDeleteBloodsugar,
  confirmedDeleteBloodsugar,
  displayConfirmDeleteBloodsugar,
  bloodsugarToEdit,
  editBloodsugarInState,
  displayEditBloodsugar,
  sendBloodsugarsToDoctor,
  displayInformationsModal,
}) => {
  let innerHtmlButton = 'Ajouter une glycémie';
  if (displayBloodsugarFormBool === true) {
    innerHtmlButton = 'Fermer';
  }

  const editBloodsugar = (bloodsugar) => {
    editBloodsugarInState(bloodsugar);
  };
  const deleteBloodsugar = (bloodsugarId) => {
    editBloodsugarIdToDelete(bloodsugarId);
  };
  const handleClickSendBloodsugarsToDoctor = () => {
    sendBloodsugarsToDoctor();
  };
  return (
    <main className="account">
      <h2>Mon compte Diabetica</h2>
      <h3>Bienvenue {user.firstname} {user.lastname} </h3>
      <p>
        Mes glycémies doivent être entre: <span className="targets">{user.target_min} et {user.target_max} g/L</span>
      </p>
      <p>
        Mon médécin référent: Docteur {user.doctor_name}
        <button
          type="button"
          onClick={handleClickSendBloodsugarsToDoctor}
          className="button-sendbloodsugars"
        >
          Envoyer mes glycémies à mon médecin
        </button>
      </p>
      {displayInformationsModal && <InformationsModal />}
      {displayConfirmDeleteBloodsugar && <ConfirmedDeleteBloodsugar />}
      <div className="display-bloodsugar">
        <button
          type="button"
          className="display-button"
          onClick={displayBloodsugarForm}
        >
          {innerHtmlButton}
        </button>
        {displayBloodsugarFormBool && <BloodsugarForm /> }
        {displayEditBloodsugar && <BloodsugarFormEdition /> }
      </div>
      <div className="account-last-bloodsugars">Mes dernières glycémies</div>
      <div className="table-users">
        <table cellSpacing="0">
          <thead>
            <tr>
              <td>Date</td>
              <td>Heure</td>
              <td>Taux (g/L)</td>
              <td>Normalité</td>
              <td>Correction</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {bloodsugars.map((bloodsugar) => (
              <tr key={bloodsugar.id} className={classNames({ 'bloodsugar-ok': bloodsugar.normal, 'bloodsugar-high': bloodsugar.high, 'bloodsugar-low': bloodsugar.low })}>
                <td>{bloodsugar.dateSentence}</td>
                <td>{bloodsugar.timeSentence}</td>
                <td>{bloodsugar.rate}</td>
                <td> {bloodsugar.normality} </td>
                <td>{bloodsugar.correction}</td>
                <td>
                  <button type="button" onClick={() => editBloodsugar(bloodsugar)}>
                    <img src={edition} alt="editer la glycémie" />
                  </button>
                </td>
                <td>
                  <button type="button" onClick={() => deleteBloodsugar(bloodsugar.id)}>
                    <img src={trash} alt="supprimer la glycémie" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

Account.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    bloodsugars: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        dateString: PropTypes.string.isRequired,
        timeString: PropTypes.string.isRequired,
        correction: PropTypes.string.isRequired,
        high: PropTypes.bool.isRequired,
        low: PropTypes.bool.isRequired,
        normal: PropTypes.bool.isRequired,
      }).isRequired,
    ).isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    target_min: PropTypes.number.isRequired,
    target_max: PropTypes.number.isRequired,
    doctor_name: PropTypes.string.isRequired,
    // treatment: PropTypes.string.isRequired,
    doctor_email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  bloodsugars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rate: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      dateString: PropTypes.string.isRequired,
      timeString: PropTypes.string.isRequired,
      correction: PropTypes.string.isRequired,
      high: PropTypes.bool.isRequired,
      low: PropTypes.bool.isRequired,
      normal: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  displayBloodsugarForm: PropTypes.func.isRequired,
  displayBloodsugarFormBool: PropTypes.bool.isRequired,
  editBloodsugarIdToDelete: PropTypes.func.isRequired,
  sendDeleteBloodsugar: PropTypes.func.isRequired,


};

export default Account;
