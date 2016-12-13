import * as ActionTypes from '../actions/action-types';

const characters = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_CHARACTERS: {
      return action.characters;
    }
    case ActionTypes.GET_CHARACTER: {
      const characterId = action.character.id;
      return {
        ...state,
        [characterId]: action.character
      };
    }
  }
  return state;
};

export default characters;
