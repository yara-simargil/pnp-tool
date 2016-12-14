import * as ActionTypes from '../actions/action-types';

export const selectCharacter = (characterId) => {
  return {
    type: ActionTypes.SELECT_CHARACTER,
    characterId
  };
};

export const getCharacters = () => (dispatch, getState) => {
  makeApiCall(dispatch, '/characters', (characters) => ({
    type: ActionTypes.GET_CHARACTERS,
    characters
  }));
};

export const getCharacter = (id) => (dispatch, getState) => {
  makeApiCall(dispatch, '/characters/' + id, (character) => ({
    type: ActionTypes.GET_CHARACTER,
    character
  }));
};

export const getMetadata = () => (dispatch, getState) => {
  makeApiCall(dispatch, '/metadata/wod', (metadata) => ({
    type: ActionTypes.GET_METADATA,
    metadata
  }));
};

function makeApiCall(dispatch, url, action) {
  fetch('http://localhost:8080' + url).then(function(response) {
    if (!response.ok) {
      console.log('Error: ' + response.status + ' ' + response.statusText);
      //todo: handle error
      return;
    }

    response.json().then(function(response) {
      dispatch(action(response));
    });
  });
}