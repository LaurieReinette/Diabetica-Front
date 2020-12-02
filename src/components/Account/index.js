import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BloodsugarForm from 'src/containers/BloodsugarForm';

import './account.scss';

const Account = ({
  user,
  bloodsugars,
  displayBloodsugarFormBool,
  displayBloodsugarForm,
}) => {
  let innerHtmlButton = 'Ajouter une glycémie';
  if (displayBloodsugarFormBool === true) {
    innerHtmlButton = 'Fermer';
  }

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
              <td>Correction</td>
              <td>Commentaires</td>
            </tr>
          </thead>
          <tbody>
            {bloodsugars.map((bloodsugar) => (
              <tr key={bloodsugar.id} className={classNames({ 'bloodsugar-ok': bloodsugar.normal, 'bloodsugar-high': bloodsugar.high, 'bloodsugar-low': bloodsugar.low })}>
                <td>{bloodsugar.dateString}</td>
                <td>{bloodsugar.timeString}</td>
                <td>{bloodsugar.rate}</td>
                <td>{bloodsugar.correction}</td>
                <td> {bloodsugar.normality} </td>
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

};

export default Account;
