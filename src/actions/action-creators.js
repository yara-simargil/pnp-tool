import * as ActionTypes from '../actions/action-types';

export const getGames = () => (dispatch) => {
  makeApiGet(dispatch, 'games', (games) => ({
    type: ActionTypes.GET_GAMES,
    games
  }));
};

export const setCurrentGame = (gameId) => {
  return {
    type: ActionTypes.SET_CURRENT_GAME,
    gameId
  };
};

export const selectCharacter = (characterId) => {
  return {
    type: ActionTypes.SELECT_CHARACTER,
    characterId
  };
};

export const getCharacters = (game) => (dispatch) => {
  makeApiGet(dispatch, game + '/characters', (characters) => ({
    type: ActionTypes.GET_CHARACTERS,
    characters
  }));
};

export const getCharacter = (game, id) => (dispatch) => {
  makeApiGet(dispatch, game + '/characters/' + id, (character) => ({
    type: ActionTypes.GET_CHARACTER,
    character
  }));
};

export const updateCharacter = (game, character) => () => {
  makeApiPost(game + '/characters/' + character.id, character);
};

export const getMetadata = (system) => (dispatch) => {
  makeApiGet(dispatch, 'metadata/' + system, (metadata) => ({
    type: ActionTypes.GET_METADATA,
    metadata
  }));
};

function makeApiGet(dispatch, url, action) {
  fetch('http://localhost:8080/' + url).then(function(response) {
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
  fetch('http://localhost:8080/' + url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}