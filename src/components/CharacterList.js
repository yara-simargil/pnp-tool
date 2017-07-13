import React from 'react';
import {connect} from 'react-redux';

import {selectCharacter} from '../actions/action-creators';
import './CharacterList.css';

export class CharacterList extends React.PureComponent {
  render() {
    const {
      characters,
      currentCharacter,
    } = this.props;

    const selectCharacter = id => {
      if (id !== currentCharacter) {
        this.props.selectCharacter(id);
      }
    };

    return (
      <ul className="character-list">
        {Object.keys(characters).map(id => (
          <li
            key={id}
            className={"item " + (currentCharacter === id ? 'active' : '')}
            onClick={() => selectCharacter(id)}>
            <a className="name">{characters[id].name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

CharacterList.propTypes = {
  characters: React.PropTypes.object,
  currentCharacter: React.PropTypes.string,
  selectCharacter: React.PropTypes.func,
};

CharacterList.defaultProps = {
  characters: {},
};

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
