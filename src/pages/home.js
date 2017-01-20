import React from 'react';
import {connect} from 'react-redux';

import {getGames} from '../actions/action-creators';
import GameList from '../components/game-list';

import './home.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    props.getGames();
  }

  render() {
    return (
      <div className="home-page">
        <link href="http://allfont.net/allfont.css?fonts=antiqua" rel="stylesheet" type="text/css" />
        <h1>Welcome!</h1>
        <p>Here are games we have:</p>
        <GameList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGames: (...args) => dispatch(getGames(...args))
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
