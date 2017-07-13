import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import { GameList } from '../../src/components/GameList';

describe('<GameList />', () => {
  test('renders empty container if no games supplied', () => {
    const wrapper = shallow(<GameList />);

    expect(wrapper.find('.game-list')).toHaveLength(1);
    expect(wrapper.find('.game-list .item')).toHaveLength(0);
  });

  test('renders list of games when supplied', () => {
    const games = {
      'test-game1': {name: 'Test Game 1'},
      'test-game2': {name: 'Test Game 2'},
      'test-game3': {name: 'Test Game 3'},
    };
    const wrapper = shallow(<GameList games={games} />);

    expect(wrapper.find('.game-list .item')).toHaveLength(3);
    expect(wrapper.find(Link)).toHaveLength(3);
    expect(wrapper.find(Link).first().prop('to')).toBe('game/test-game1');
    expect(wrapper.find(Link).first().prop('children')).toBe('Test Game 1');
  });
});
