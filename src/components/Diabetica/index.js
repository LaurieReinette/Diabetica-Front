// == Import npm
import React, { useEffect } from 'react';
import Proptypes from 'prop-types';

import { Switch, Route } from 'react-router-dom';

import Header from 'src/containers/Header';
import Nav from 'src/containers/Nav';
import Connexion from 'src/components/Connexion';
import Account from 'src/components/Account';
import About from 'src/components/About';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

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
      {/* <Main />
      <Header /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/connexion-inscription" component={Connexion} />
        <Route path="/a-propos" component={About} />
        <Route path="/mon-compte" component={Account} />
        {/* <Route path="/" component={Page404} /> */}
      </Switch>
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

Diabetica.propTypes = {
  sendAuth: Proptypes.func.isRequired,
};

// == Export
export default Diabetica;
