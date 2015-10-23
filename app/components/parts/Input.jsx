import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

const propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.number
};

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
  }

  /**
   * @desc updates the store type.
   * Passes type to Blend Button as props.
   */
  inputHandler(e) {
    let choice = this.props.name;
    let input = this.props.value;

    switch (choice) {
      case 'type':
        Actions.requiredType(input);
      break;
      case 'amount':
        Actions.requiredAmount(input);
      break;
      case 'liquid':
        Actions.requiredLiquid(input);
      break;
    }
  }

  pressEnterHandler() {
    console.log('Push Enter feature?');
  }

  render() {
    let { type, name, value } = this.props;

    return (
      <div className="input">
        <label className="label" for={name}>
        {value} <input type={type}
                 id={name}
                 name={name}
                 onChange={this.inputHandler}
                 onKeyDown={this.pressEnterHandler}
                 />
        </label>
      </div>
    )
  }
};

Input.propTypes = propTypes;
