import { combineReducers } from 'redux';

import appView from './app-view.js';
import characters from './characters.js';
import metadata from './metadata.js';

export default combineReducers({
  appView,
  characters,
  metadata
});
