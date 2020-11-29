// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import Header from 'src/containers/Header';
import Nav from 'src/containers/Nav';
import Connexion from 'src/containers/Connexion';
import Account from 'src/containers/Account';
import About from 'src/components/About';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import Error from 'src/containers/Error';

// == Import
import './styles.scss';

// == Composant
const Diabetica = ({ logged, error, errorDetected }) => {
  const truc = 'machine';
  return (
    <div className="diabetica">
      <Header />
      <Nav />
      {errorDetected && <Error />}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/connexion-inscription" component={Connexion} />
        <Route path="/a-propos" component={About} />
        {logged && <Route path="/mon-compte" component={Account} /> }
        {/* <Route path="/" component={Page404} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

Diabetica.propTypes = {
  logged: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

// == Export
export default Diabetica;
