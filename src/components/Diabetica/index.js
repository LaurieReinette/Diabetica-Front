// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Main from 'src/components/Main';

// == Import
import './styles.scss';

// == Composant
const Diabetica = () => (
  <div className="diabetica">
    <Header />
    <Main />
    <Footer />
  </div>
);

// == Export
export default Diabetica;
