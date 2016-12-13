import React from 'react';
import {connect} from 'react-redux';

import './character-sheet.css';

class CharacterSheet extends React.Component {
  render() {
    let {character, metadata} = this.props;
    return (
      <div className="character-sheet">
        <h1>{character.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let character = state.characters[state.appView.currentCharacter];
  return {
    character: character,
    metadata: state.metadata[character.system].charsheets[character.type]
  };
};

export default connect(mapStateToProps)(CharacterSheet);
