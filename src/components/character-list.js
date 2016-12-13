import React from 'react';
import {connect} from 'react-redux';

import {selectCharacter} from '../actions/action-creators';
import './character-list.css';

class CharacterList extends React.Component {
  render() {
    const selectCharacter = (id) => {
      if (id !== this.props.currentCharacter) {
        this.props.selectCharacter(id);
      }
    };

    return (
      <ul className="character-list">
        {Object.keys(this.props.characters).map((id) => (
          <li
            key={id}
            className={"item " + (this.props.currentCharacter === id ? 'active' : '')}
            onClick={() => selectCharacter(id)}>
            <a className="name">{this.props.characters[id].name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
    currentCharacter: state.appView.currentCharacter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCharacter: (...args) => dispatch(selectCharacter(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
