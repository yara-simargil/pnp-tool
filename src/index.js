import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';
import middlewares from './middlewares/index';
import './index.css';

import HomePage from './pages/home';
import GamePage from './pages/game';

let store = createStore(reducers, compose(applyMiddleware(...middlewares, thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={HomePage} />
      <Route path="game/:game" component={GamePage} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
