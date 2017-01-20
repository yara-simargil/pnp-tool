import React from 'react';
import {connect} from 'react-redux';

import {getGames, setCurrentGame} from '../actions/action-creators';
import CharacterList from '../components/character-list';
import WodCharacterSheet from '../components/wod/character-sheet';

import './game.css';

class GamePage extends React.Component {
  characterSheets = {
    'wod': WodCharacterSheet
  };

  constructor(props) {
    super(props);

    props.getGames();
    props.setCurrentGame(props.gameId);
  }

  render() {
    let {game} = this.props;
    if (!game) return null;

    let CharacterSheet = this.characterSheets[game.system];

    return (
      <div className={'game-page ' + game.system}>
        <link href="//fonts.googleapis.com/css?family=Nosifer" rel="stylesheet" />
        <link href="http://allfont.net/allfont.css?fonts=antiqua" rel="stylesheet" type="text/css" />
        <link href="http://allfont.net/allfont.css?fonts=b52" rel="stylesheet" type="text/css" />
        <link href="http://allfont.net/allfont.css?fonts=grunge" rel="stylesheet" type="text/css" />
        <CharacterList />
        <CharacterSheet />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    gameId: ownProps.params.game,
    game: state.games[ownProps.params.game]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: (...args) => dispatch(getGames(...args)),
    setCurrentGame: (...args) => dispatch(setCurrentGame(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
