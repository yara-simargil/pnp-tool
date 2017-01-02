import React from 'react';
import {connect} from 'react-redux';

class SkillBar extends React.Component {
  render() {
    let {key, name, skill, maxValue, onChange} = this.props;
    if (!key || !skill) return null;

    maxValue = maxValue || 5;

    return (
      <p key={key}>{name}{skill.aspect ? '(' + skill.aspect + ')' : ''}: {skill.value} / {maxValue}</p>
    );
  }
}

export default connect()(SkillBar);