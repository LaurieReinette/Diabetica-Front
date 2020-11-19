// == Import npm
import React, { useEffect } from 'react';
import Proptypes from 'prop-types';

import Header from 'src/containers/Header';
import Nav from 'src/containers/Nav';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';

// == Import
import './styles.scss';

// == Composant
const Diabetica = ({ sendAuth }) => {
  useEffect(() => {
    sendAuth();
  }, []);

  return (
    <div className="diabetica">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

Diabetica.propTypes = {
  sendAuth: Proptypes.func.isRequired,
};

// == Export
export default Diabetica;
