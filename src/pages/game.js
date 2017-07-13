import React from 'react';
import {connect} from 'react-redux';

import {getGames, setCurrentGame} from '../actions/action-creators';
import CharacterList from '../components/character-list';
import WodCharacterSheet from '../components/wod/character-sheet';

import './game.css';

export class GamePage extends React.PureComponent {
  constructor(props) {
    super(props);

    props.getGames();
    props.setCurrentGame(props.gameId);

    this.characterSheets = {
      'wod': WodCharacterSheet
    };
  }

  render() {
    let {game} = this.props;
    if (!game) return null;

    let CharacterSheet = this.characterSheets[game.system];

    return (
      <div className={`game-page ${game.system}`}>
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

GamePage.propTypes = {
  gameId: React.PropTypes.string,
  game: React.PropTypes.shape({
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    system: React.PropTypes.string,
  }),
  getGames: React.PropTypes.func,
  setCurrentGame: React.PropTypes.func,
};

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
