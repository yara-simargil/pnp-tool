import React from 'react';
import { connect } from 'react-redux'

import { getCharacters } from './actions/action-creators';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    props.getCharacters({
      max: { id: 'max', name: 'Max'},
      ched: { id: 'ched', name: 'Ched'}
    });
  }

  render() {
    const characters = Object.keys(this.props.characters).map((id) => (
      <li key={id}>
        {this.props.characters[id].name}
      </li>
    ));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <ul>
          {characters}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: (...args) => dispatch(getCharacters(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
