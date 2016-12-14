import React from 'react';
import {connect} from 'react-redux';

import {getCharacters, getMetadata} from './actions/action-creators';
import CharacterList from './components/character-list';
import CharacterSheet from './components/character-sheet';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getMetadata();
    props.getCharacters();
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
    getCharacters: (...args) => dispatch(getCharacters(...args)),
    getMetadata: (...args) => dispatch(getMetadata(...args))
  };
};

export default connect(null, mapDispatchToProps)(App);
