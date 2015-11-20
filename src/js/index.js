'use strict';

// Although React is not used directly herein, ReactDOM.render
// will raise an error if it's not imported.
/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import {Router} from 'react-router';

import app from './reducers';
import App from './components/app';
import routes from './routes';

// The main data store for the application.
let store = createStore(app);

// Expose the entire state to the application.  This can
// be broken down into smaller pieces as the application
// grows.
function select(state) {
  return {
    state
  };
}

// The top-level application component.
var appComponent = connect(select)(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('react-app')
);

export default appComponent;
