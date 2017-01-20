import * as ActionTypes from '../actions/action-types';

const games = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_GAMES: {
      return action.games;
    }
  }
  return state;
};

export default games;
