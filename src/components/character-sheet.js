import React from 'react';
import {connect} from 'react-redux';

import {updateCharacter} from '../actions/action-creators';
import SkillList from './generic/skill-list';
import './character-sheet.css';

class CharacterSheet extends React.Component {
  render() {
    let {character, metadata} = this.props;
    if (!character || !metadata) return null;

    const onChange = () => {
      this.props.updateCharacter(character);
    };

    // const getSkillValue = (category, key) => {
    //   let skill = character[category][key];
    //   return skill ? skill.value : 0;
    // };
    // const getSkillAspect = (category, key) => {
    //   let skill = character[category][key];
    //   return skill && skill.aspect ? ' (' + skill.aspect + ')' : '';
    // };
    const getSkill = (category, key) => {
      return character[category][key];
    };

    return (
      <div className={'character-sheet ' + character.type}>
        <div className="general-info">
          <h1>{character.name}</h1>
          <img className="avatar" alt="avatar" />
          <ul>
            <li className={character.clan}>{character.clan}</li>
            <li className="nature">{character.nature}</li>
            <li>{character.demeanor}</li>
            <li>Инициатива: {character.initiative}</li>
          </ul>
          <div className="cash">{character.cash}</div>
          <div className="experience">
            <p>{character.experience.total} <span>(+{character.experience.total - character.experience.spent})</span></p>
            <a>...</a>
          </div>
        </div>

        <div className="main">
          <div className="section">
            <h2>Атрибуты</h2>
            <div className="columns">
              <SkillList name="Физические" metadata={metadata.attributes.physical} skills={character.attributes} onChange={onChange} />
              <SkillList name="Социальные" metadata={metadata.attributes.social} skills={character.attributes} onChange={onChange} />
              <SkillList name="Ментальные" metadata={metadata.attributes.mental} skills={character.attributes} onChange={onChange} />
            </div>
          </div>

          <div className="section">
            <h2>Способности</h2>
            <div className="columns">
              <SkillList name="Таланты" metadata={metadata.abilities.talents} skills={character.abilities} onChange={onChange} />
              <SkillList name="Навыки" metadata={metadata.abilities.skills} skills={character.abilities} onChange={onChange} />
              <SkillList name="Познания" metadata={metadata.abilities.knowledges} skills={character.abilities} onChange={onChange} />
            </div>
          </div>
        </div>

        <div className="current-state">
          <div>blood pool: {character.state.bloodPool.current} / {character.state.bloodPool.limit}</div>
          <div>willpower: {character.state.willpower.current} / {character.state.willpower.limit}</div>
          <div>health: injury {character.state.injury}</div>
          <div>psychoses: {character.state.psychoses}</div>
          <div>effects: {character.state.effects}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (!state.appView.currentCharacter ||
      !state.characters[state.appView.currentCharacter].system ||
      !state.metadata[state.characters[state.appView.currentCharacter].system].system) {
    return {};
  }

  let character = state.characters[state.appView.currentCharacter];
  return {
    character: character,
    metadata: state.metadata[character.system].charsheets[character.type]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCharacter: (...args) => dispatch(updateCharacter(...args))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSheet);
