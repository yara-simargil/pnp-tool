import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import store from './store';
import HomePage from './pages/home';
import GamePage from './pages/game';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={HomePage} />
      <Route path="game/:game" component={GamePage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
