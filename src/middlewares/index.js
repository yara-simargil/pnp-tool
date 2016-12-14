import {getCharacter} from '../actions/action-creators';
import * as ActionTypes from '../actions/action-types';

const getCurrentCharacterMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let returnValue = next(action);

  switch(action.type) {
    case ActionTypes.GET_CHARACTERS: {
      dispatch(getCharacter(getState().appView.currentCharacter));
      return returnValue;
    }
    case ActionTypes.SELECT_CHARACTER: {
      dispatch(getCharacter(action.characterId));
      return returnValue;
    }
  }

  return returnValue;
};


export default [getCurrentCharacterMiddleware];
