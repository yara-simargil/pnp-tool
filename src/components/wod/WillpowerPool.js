import React from 'react';
import {connect} from 'react-redux';

import './WillpowerPool.css';

class WillpowerPool extends React.Component {
  render() {
    let {willpower, onChange} = this.props;

    willpower = willpower || {current: 0, limit: 11};

    function onClick(newValue) {
      willpower.current = willpower.current < newValue ? newValue : newValue - 1;
      onChange();
    }

    return (
      <div className="willpower-pool">
        {[...new Array(willpower.limit)].map((x, i) =>
          <div key={i + 1} className="item">
            {i + 1}
            <div className={"drop " + (willpower.current > i ? 'filled' : '')}
               onClick={()=>{onClick(i + 1)}} />
          </div>
        )}
      </div>
    );
  }
}

export default connect()(WillpowerPool);
