import {getCharacter} from '../actions/action-creators';
import * as ActionTypes from '../actions/action-types';

import max from '../../data/characters/max.json';

const getCurrentCharacterMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let returnValue = next(action);

  if (action.type === ActionTypes.GET_CHARACTERS) {
    dispatch(getCharacter(max));
  }

  return returnValue;
};


export default [getCurrentCharacterMiddleware];
