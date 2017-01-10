import React from 'react';
import {connect} from 'react-redux';

import './blood-pool.css';

class BloodPool extends React.Component {
  render() {
    let {bloodPool, onChange} = this.props;

    bloodPool = bloodPool || {current: 0, limit: 11};

    function onClick(newValue) {
      bloodPool.current = bloodPool.current < newValue ? newValue : newValue - 1;
      onChange();
    }

    return (
      <div className="blood-pool">
        {[...Array(bloodPool.limit)].map((x, i) =>
          <div className="item">
            {i + 1}
            <div key={i + 1}
                className={"drop " + (bloodPool.current > i ? 'filled' : '')}
               onClick={()=>{onClick(i + 1)}} />
          </div>
        )}
      </div>
    );
  }
}

export default connect()(BloodPool);