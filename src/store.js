import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';

const initialState = undefined;
const storeEnhancer = compose(
  applyMiddleware(...middlewares, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(reducers, initialState, storeEnhancer);
