import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class GameList extends React.Component {
  render() {
    let {games} = this.props;

    return (
      <ul className="game-list">
        {Object.keys(games).map(id => (
          <li key={id} className="item">
            <Link to={"game/" + id}>{games[id].name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

GameList.propTypes = {
  games: React.PropTypes.object,
};

GameList.defaultProps = {
  games: {},
};

const mapStateToProps = (state) => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(GameList);
