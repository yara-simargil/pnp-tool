import * as ActionTypes from '../actions/action-types';

export const selectCharacter = (characterId) => {
  return {
    type: ActionTypes.SELECT_CHARACTER,
    characterId
  };
};

export const getCharacters = () => (dispatch) => {
  makeApiGet(dispatch, '/characters', (characters) => ({
    type: ActionTypes.GET_CHARACTERS,
    characters
  }));
};

export const getCharacter = (id) => (dispatch) => {
  makeApiGet(dispatch, '/characters/' + id, (character) => ({
    type: ActionTypes.GET_CHARACTER,
    character
  }));
};

export const updateCharacter = (character) => () => {
  makeApiPost('/characters/' + character.id, character);
};

export const getMetadata = () => (dispatch) => {
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

function makeApiPost(url, data) {
  fetch('http://localhost:8080' + url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}