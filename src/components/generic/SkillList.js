import React from 'react';
import {connect} from 'react-redux';

import SkillBar from './SkillBar';

class SkillList extends React.Component {
  render() {
    let {name, metadata, skills, onChange} = this.props;
    if (!metadata) return null;

    function onSkillChange(skillId, newValue) {
      skills[skillId] = skills[skillId] || {};
      skills[skillId].value = newValue;
      onChange();
    }

    return (
      <div>
        <h3>{name}</h3>
        {Object.keys(metadata).map((key) => (
          <SkillBar key={key} id={key} name={metadata[key]} skill={skills[key]} onChange={onSkillChange} />
        ))}
      </div>
    );
  }
}

export default connect()(SkillList);
