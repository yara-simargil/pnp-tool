import React from 'react';
import {connect} from 'react-redux';

import {getCharacters, getCharacter} from './actions/action-creators';
import CharacterList from './components/character-list';
import CharacterSheet from './components/character-sheet';

import logo from './logo.svg';
import './App.css';

import list from '../data/characters/list.json';
import max from '../data/characters/max.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getCharacters(list);
    props.getCharacter(max);
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
        </div>

        <CharacterList />
        <CharacterSheet />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (...args) => dispatch(getCharacters(...args)),
    getCharacter: (...args) => dispatch(getCharacter(...args))
  };
};

export default connect(null, mapDispatchToProps)(App);
