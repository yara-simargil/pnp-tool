import * as ActionTypes from '../actions/action-types';

const appView = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_CHARACTER: {
      return {
        ...state,
        currentCharacter: action.characterId
      };
    }
  };
  return state;
};

export default appView;
