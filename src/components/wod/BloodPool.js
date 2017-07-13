import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import './BloodPool.css';

export default class BloodPool extends React.PureComponent {
  render() {
    const {bloodPool, onChange} = this.props;

    function onClick(newValue) {
      bloodPool.current = bloodPool.current < newValue ? newValue : newValue - 1;
      onChange();
    }

    return (
      <div className="blood-pool">
        {[...new Array(bloodPool.limit)].map((x, i) =>
          <div key={i + 1} className="blood-pool__item">
            {i + 1}
            <div
              className={classnames(
                'blood-pool__drop',
                {'blood-pool__drop--filled': bloodPool.current > i}
              )}
              onClick={()=>{onClick(i + 1)}}
            />
          </div>
        )}
      </div>
    );
  }
}

BloodPool.propTypes = {
  bloodPool: React.PropTypes.shape({
    current: React.PropTypes.number,
    limit: React.PropTypes.number,
  }),
  onChange: React.PropTypes.func,
};

BloodPool.defaultProps = {
  bloodPool: {
    current: 0,
    limit: 11
  },
};
