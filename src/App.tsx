import Navbar from 'components/navbar';
import { ContinentProvider } from 'context/continent';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Continents from 'pages/continents';
import Countries from 'pages/countries';
import Languages from 'pages/languages';
import { CountryProvider } from 'context/country';
import { LanguageProvider } from 'context/language';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <ContinentProvider>
              <Continents />
            </ContinentProvider>
          </Route>

          <Route exact path='/countries'>
            <CountryProvider>
              <Countries />
            </CountryProvider>
          </Route>

          <Route exact path='/languages'>
            <LanguageProvider>
              <Languages />
            </LanguageProvider>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
