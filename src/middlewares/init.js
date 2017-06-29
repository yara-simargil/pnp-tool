import {getMetadata, getCharacters, getCharacter} from '../actions/action-creators';
import * as ActionTypes from '../actions/action-types';

export default ({getState, dispatch}) => next => action => {
  const returnValue = next(action);

  switch(action.type) {
    case ActionTypes.GET_GAMES:
    case ActionTypes.SET_CURRENT_GAME: {
      const currentGame = getState().games[getState().appView.currentGame];
      if (!currentGame) break;

      dispatch(getMetadata(currentGame.system));
      dispatch(getCharacters(currentGame.id));

      break;
    }
    case ActionTypes.GET_CHARACTERS: {
      const appView = getState().appView;
      dispatch(getCharacter(appView.currentGame, appView.currentCharacter));
      break;
    }
    case ActionTypes.SELECT_CHARACTER: {
      dispatch(getCharacter(action.characterId));
      break;
    }
  }

  return returnValue;
};
