import React from 'react';
import {connect} from 'react-redux';

import SkillBar from './skill-bar';

class SkillList extends React.Component {
  render() {
    let {name, metadata, skills, onChange} = this.props;
    if (!metadata) return null;

    return (
      <div>
        <h3>{name}</h3>
        {Object.keys(metadata).map((key) => (
          <SkillBar key={key} name={metadata[key]} skill={skills[key]} onChange={onChange} />
        ))}
      </div>
    );
  }
}

export default connect()(SkillList);