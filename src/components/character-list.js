import React from 'react';
import {connect} from 'react-redux';

import {selectCharacter} from '../actions/action-creators';
import './character-list.css';

class CharacterList extends React.Component {
  render() {
    return (
      <ul className="character-list">
        {Object.keys(this.props.characters).map((id) => (
          <li key={id} className={"item " + (this.props.currentCharacter === id ? 'active' : '')}>
            <a onClick={this.props.selectCharacter(id)}>{this.props.characters[id].name}</a>
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
    selectCharacter: (id) => {return () => dispatch(selectCharacter(id))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
