import * as ActionTypes from '../actions/action-types';

export const getCharacter = (character) => {
  return {
    type: ActionTypes.GET_CHARACTER,
    character
  };
};

export const getCharacters = (characters) => {
  return {
    type: ActionTypes.GET_CHARACTERS,
    characters
  };
};

export const selectCharacter = (characterId) => {
  return {
    type: ActionTypes.SELECT_CHARACTER,
    characterId
  };
};
