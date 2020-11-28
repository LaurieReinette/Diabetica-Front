import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './account.scss';

const Account = ({ user }) => {
console.log('tata');
  return (
    <main className="account">
      <h2>MON COMPTE DIABETICA</h2>
      <h3>Bienvenue {user.firstname} {user.lastname} </h3>
      <div className="table-users">
        <div className="account-last-bloodsugar">Mes dernières glycémies</div>
        <table cellSpacing="0">
          <thead>
            <tr>
              <td>Date</td>
              <td>Heure</td>
              <td>Taux (g/L)</td>
              <td>Correction</td>
            </tr>
          </thead>
          <tbody>
            {user.bloodsugars.map((bloodsugar) => (
              <tr key={bloodsugar.id}>
                <td>{bloodsugar.date}</td>
                <td>{bloodsugar.time}</td>
                <td>{bloodsugar.rate}</td>
                <td>{bloodsugar.correction}</td>
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
        correction: PropTypes.string.isRequired,
        corrected: PropTypes.bool.isRequired,
      }).isRequired,
    ).isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    target_min: PropTypes.number.isRequired,
    target_max: PropTypes.number.isRequired,
    doctor_name: PropTypes.string.isRequired,
    treatment: PropTypes.string.isRequired,
    doctor_email: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Account;
