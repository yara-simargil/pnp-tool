import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import './WillpowerPool.css';

export default class WillpowerPool extends React.PureComponent {
  render() {
    const {willpower, onChange} = this.props;

    function onClick(newValue) {
      willpower.current = willpower.current < newValue ? newValue : newValue - 1;
      onChange();
    }

    return (
      <div className="willpower-pool">
        {[...new Array(willpower.limit)].map((x, i) =>
          <div key={i + 1} className="willpower-pool__item">
            {i + 1}
            <div
              className={classnames(
                'willpower-pool__drop',
                {'willpower-pool__drop--filled': willpower.current > i}
              )}
              onClick={() => {onClick(i + 1)}}
            />
          </div>
        )}
      </div>
    );
  }
}

WillpowerPool.propTypes = {
  willpower: React.PropTypes.shape({
    current: React.PropTypes.number,
    limit: React.PropTypes.number,
  }),
  onChange: React.PropTypes.func,
};

WillpowerPool.defaultProps = {
  willpower: {
    current: 0,
    limit: 11
  },
};
