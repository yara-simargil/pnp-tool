import React from 'react';
import {connect} from 'react-redux';

import {getCharacters} from './actions/action-creators';
import CharacterList from './components/character-list';
import CharacterSheet from './components/character-sheet';

import './App.css';
import list from '../data/characters/list.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getCharacters(list);
  }

  render() {
    return (
      <div className="app">
        <CharacterList />
        <CharacterSheet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (...args) => dispatch(getCharacters(...args))
  };
};

export default connect(null, mapDispatchToProps)(App);
