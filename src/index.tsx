import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import './assets/fomantic/dist/semantic.min.css';
import { Experiment } from './components/experiments/experiment';
import { DifferentSizesExperiment } from './components/experiments/differentSizesExperiment';
import { DifferentColorsExperiment } from './components/experiments/differentColorsExperiment';
import { Route, Router, Switch } from 'react-router';
import { Header } from 'semantic-ui-react';

const routing = (
  <Router history={createBrowserHistory()}>
          <Header />
          <div className="page">
              <Switch>
                  <Route exact path="/" component={App} />
                  <Route exact path="/basic" component={Experiment} />
                  <Route exact path="/colors" component={DifferentColorsExperiment} />
                  <Route path="/sizes" component={DifferentSizesExperiment} />
              </Switch>
          </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
