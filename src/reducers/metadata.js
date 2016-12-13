import vampire from '../../data/wod/charsheets/vampire.json';

const metadata = (state = {
  wod: {
    charsheets: {
      vampire: vampire
    }
  }
}, action) => {
  return state;
};

export default metadata;
