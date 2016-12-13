import * as ActionTypes from '../actions/action-types';

const appView = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_CHARACTER: {
      return {
        ...state,
        currentCharacter: action.characterId
      };
    }
    case ActionTypes.GET_CHARACTERS: {
      return {
        ...state,
        currentCharacter: Object.keys(action.characters)[0]
      };
    }
  }
  return state;
};

export default appView;
