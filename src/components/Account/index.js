import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BloodsugarForm from 'src/containers/BloodsugarForm';

import trash from 'src/assets/images/trash.png';
import edition from 'src/assets/images/edition.png';

import './account.scss';

const Account = ({
  user,
  bloodsugars,
  displayBloodsugarFormBool,
  displayBloodsugarForm,
  editBloodsugarId,
  sendDeleteBloodsugar,
}) => {
  let innerHtmlButton = 'Ajouter une glycémie';
  if (displayBloodsugarFormBool === true) {
    innerHtmlButton = 'Fermer';
  }

  // const editBloodsugar = (bloodsugarId) => {
  //   editBloodsugar(bloodsugarId);
  // };
  const deleteBloodsugar = (bloodsugarId) => {
    console.log('coucou');
    console.log(bloodsugarId);
    editBloodsugarId(bloodsugarId);
    sendDeleteBloodsugar();
  };

  return (
    <main className="account">
      <h2>Mon compte Diabetica</h2>
      <h3>Bienvenue {user.firstname} {user.lastname} </h3>
      <div className="display-bloodsugar">
        <button
          type="button"
          className="display-button"
          onClick={displayBloodsugarForm}
        >
          {innerHtmlButton}
        </button>
        { displayBloodsugarFormBool && <BloodsugarForm /> }
      </div>
      <div className="table-users">
        <div className="account-last-bloodsugars">Mes dernières glycémies</div>
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
                <td>{bloodsugar.dateString}</td>
                <td>{bloodsugar.timeString}</td>
                <td>{bloodsugar.rate}</td>
                <td> {bloodsugar.normality} </td>
                <td>{bloodsugar.correction}</td>
                <td>
                  <button type="button">
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
  editBloodsugarId: PropTypes.func.isRequired,
  sendDeleteBloodsugar:  PropTypes.func.isRequired,


};

export default Account;
