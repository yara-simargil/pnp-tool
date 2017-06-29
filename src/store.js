import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import middlewares from './middlewares';

const initialState = undefined;
const rootReducer = combineReducers(reducers);
const storeEnhancer = compose(
  applyMiddleware(...middlewares, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default createStore(rootReducer, initialState, storeEnhancer);
