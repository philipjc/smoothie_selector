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
      <div className="section-upper__form-block--square"
           data-name={name}
           onClick={this.props.onClick}>
        { name }
      </div>
    )
  }
};

Square.propTypes = propTypes;
