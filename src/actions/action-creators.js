import * as ActionTypes from '../actions/action-types';

export const selectCharacter = (characterId) => {
  return {
    type: ActionTypes.SELECT_CHARACTER,
    characterId
  };
};

export const getCharacters = () => (dispatch, getState) => {
  makeApiGet(dispatch, '/characters', (characters) => ({
    type: ActionTypes.GET_CHARACTERS,
    characters
  }));
};

export const getCharacter = (id) => (dispatch, getState) => {
  makeApiGet(dispatch, '/characters/' + id, (character) => ({
    type: ActionTypes.GET_CHARACTER,
    character
  }));
};

export const updateCharacter = (character) => (dispatch, getState) => {
  makeApiPost(dispatch, '/characters/' + character.id);
};

export const getMetadata = () => (dispatch, getState) => {
  makeApiGet(dispatch, '/metadata/wod', (metadata) => ({
    type: ActionTypes.GET_METADATA,
    metadata
  }));
};

function makeApiGet(dispatch, url, action) {
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

function makeApiPost(dispatch, url, data) {
  fetch('http://localhost:8080' + url, {
    method: 'post',
    body: JSON.stringify(data)
  });
}