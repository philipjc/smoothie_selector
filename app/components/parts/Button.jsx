import React from 'react';

// Reflux ===================================================
import Actions from '../../actions/SmoothieActions.js';

const propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

// TODO Set default props rather than in render
  render() {
    let { type, name, ...other } = this.props;

    if (name === 'generate') {
      return (
        <div className={'button-' + name}
             onClick={this.props.blend}>
          Blend!!!!
        </div>
      );
    } else if (name === 'save-card') {
      return (
        <div>
          <ul className={'button-' + name}>
            <li className="btn"
                onClick={this.props.save}>
                <i className="fa fa-save"></i>
            </li>
            <li className="btn"
                onClick={this.props.trash}>
                <i className="fa fa-trash-o"></i>
            </li>
         </ul>
        </div>
      );

    } else {
      return (
        <button type={type} className={'button__' + name}>
          Not generate
        </button>
      );
    }
  }
}

Button.propTypes = propTypes;
