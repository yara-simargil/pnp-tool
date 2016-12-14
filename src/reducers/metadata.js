import * as ActionTypes from '../actions/action-types';

const metadata = (state = {
  wod: {}
}, action) => {
  switch (action.type) {
    case ActionTypes.GET_METADATA: {
      return {
        ...state,
        [action.metadata.system]: action.metadata
      };
    }
  }
  return state;
};

export default metadata;
