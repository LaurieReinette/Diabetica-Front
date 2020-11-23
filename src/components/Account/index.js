import React from 'react';
import PropTypes from 'prop-types';

import './account.scss';

const Account = ({ user }) => (
  <main className="account">
    <h2>MON COMPTE DIABETICA</h2>
    <h3>Bienvenue {user.firstname} {user.lastname} </h3>
  </main>
);

export default Account;
