import React from 'react';
import {connect} from 'react-redux';

import './skill-bar.css';

class SkillBar extends React.Component {
  render() {
    let {id, name, skill, maxValue, onChange} = this.props;
    if (!id) return null;

    maxValue = maxValue || 5;
    skill = skill || {value: 0};

    function onClick(value) {
      onChange(id, skill.value < value ? value : value - 1);
    }

    return (
      <div className="skill-bar">
        <span className="name">{name}{skill.aspect ? ' (' + skill.aspect + ')' : ''}:</span>
        {[...Array(maxValue)].map((x, i) =>
          <span key={i + 1}
                className={"item " + (skill.value > i ? 'filled' : '')}
                onClick={()=>{onClick(i + 1)}} />
        )}
      </div>
    );
  }
}

export default connect()(SkillBar);