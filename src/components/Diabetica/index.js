// == Import npm
import React, { useEffect } from 'react';
import Proptypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';

// == Import
import './styles.scss';

// == Composant
const Diabetica = ({ getNavDatas }) => {
  useEffect(() => {
    getNavDatas();
    console.log('premier rendu');
  }, []);

  return (
    <div className="diabetica">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

Diabetica.propTypes = {
  getNavDatas: Proptypes.func.isRequired,
};

// == Export
export default Diabetica;
