import React from 'react';
import {connect} from 'react-redux';

import './character-sheet.css';

class CharacterSheet extends React.Component {
  render() {
    let {character, metadata} = this.props;
    if (!character || !metadata) return null;

    const getSkillValue = (category, key) => {
      let skill = character[category][key];
      return skill ? skill.value : 0;
    };
    const getSkillAspect = (category, key) => {
      let skill = character[category][key];
      return skill && skill.aspect ? ' (' + skill.aspect + ')' : '';
    };

    return (
      <div className="character-sheet">
        <div className="general-info">
          <h1>{character.name}</h1>
          <img className="avatar" alt="avatar" />
          <ul>
            <li>{character.clan}</li>
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
              <div>
                <h3>Физические</h3>
                {Object.keys(metadata.attributes.physical).map((key) => (
                  <p key={key}>{metadata.attributes.physical[key]}{getSkillAspect('attributes', key)}: {getSkillValue('attributes', key)}</p>
                ))}
              </div>
              <div>
                <h3>Социальные</h3>
                {Object.keys(metadata.attributes.social).map((key) => (
                  <p key={key}>{metadata.attributes.social[key]}{getSkillAspect('attributes', key)}: {getSkillValue('attributes', key)}</p>
                ))}
              </div>
              <div>
                <h3>Ментальные</h3>
                {Object.keys(metadata.attributes.mental).map((key) => (
                  <p key={key}>{metadata.attributes.mental[key]}{getSkillAspect('attributes', key)}: {getSkillValue('attributes', key)}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Способности</h2>
            <div className="columns">
              <div>
                <h3>Таланты</h3>
                {Object.keys(metadata.abilities.talents).map((key) => (
                  <p key={key}>{metadata.abilities.talents[key]}{getSkillAspect('abilities', key)}: {getSkillValue('abilities', key)}</p>
                ))}
              </div>
              <div>
                <h3>Навыки</h3>
                {Object.keys(metadata.abilities.skills).map((key) => (
                  <p key={key}>{metadata.abilities.skills[key]}{getSkillAspect('abilities', key)}: {getSkillValue('abilities', key)}</p>
                ))}
              </div>
              <div>
                <h3>Познания</h3>
                {Object.keys(metadata.abilities.knowledges).map((key) => (
                  <p key={key}>{metadata.abilities.knowledges[key]}{getSkillAspect('abilities', key)}: {getSkillValue('abilities', key)}</p>
                ))}
              </div>
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

export default connect(mapStateToProps)(CharacterSheet);
