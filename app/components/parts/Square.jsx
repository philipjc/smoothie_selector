import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

const propTypes = {
  name: React.PropTypes.string
};

export default class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name } = this.props;

    return (
      <div className="option-block" onClick={this.props.onClick}>
       <span className="option-block__label">
         { name }
       </span>
       <span className="option-block__state">
         
       </span>
      </div>
    )
  }
};

Square.propTypes = propTypes;
