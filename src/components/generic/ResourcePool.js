import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';

import './ResourcePool.css';

export default class ResourcePool extends React.PureComponent {
  render() {
    const {
      resource,
      resourcePool,
      onChange
    } = this.props;

    function onClick(newValue) {
      resourcePool.current = resourcePool.current < newValue ? newValue : newValue - 1;
      onChange();
    }

    return (
      <div className={classnames('resource-pool', resource)}>
        {[...new Array(resourcePool.limit)].map((x, i) =>
          <div key={i + 1} className="resource-pool__item">
            {i + 1}
            <div
              className={classnames(
                'resource-pool__drop',
                {'resource-pool__drop--filled': resourcePool.current > i}
              )}
              onClick={()=>{onClick(i + 1)}}
            />
          </div>
        )}
      </div>
    );
  }
}

ResourcePool.propTypes = {
  resource: React.PropTypes.string,
  resourcePool: React.PropTypes.shape({
    current: React.PropTypes.number,
    limit: React.PropTypes.number,
  }),
  onChange: React.PropTypes.func,
};

ResourcePool.defaultProps = {
  resourcePool: {
    current: 0,
    limit: 11
  },
};
