import history from './history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter as Router } from 'react-router-dom';
import store from './store/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
