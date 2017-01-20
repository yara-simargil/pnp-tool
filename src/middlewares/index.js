import {getMetadata, getCharacters, getCharacter} from '../actions/action-creators';
import * as ActionTypes from '../actions/action-types';

const getCurrentCharacterMiddleware = ({getState, dispatch}) => (next) => (action) => {
  let returnValue = next(action);

  switch(action.type) {
    case ActionTypes.GET_GAMES:
    case ActionTypes.SET_CURRENT_GAME: {
      let currentGame = getState().games[getState().appView.currentGame];
      if (!currentGame) return returnValue;

      dispatch(getMetadata(currentGame.system));
      dispatch(getCharacters(currentGame.id));

      return returnValue;
    }
    case ActionTypes.GET_CHARACTERS: {
      let appView = getState().appView;
      dispatch(getCharacter(appView.currentGame, appView.currentCharacter));
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
