import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.inputHandler = this.inputHandler.bind(this);
  }

  /**
   * @desc update the store type. Pass type to Button as props.
   * // TODO Set up user pushing Enter.
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
}
