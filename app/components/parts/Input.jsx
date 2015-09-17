import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.inputHandler = this.inputHandler.bind(this);
  }

  /**
   * @desc update the store type. Pass type to Button as props.
   */
  inputHandler(e) {
    let state = e.target.checked;

    if (state) {
      let input = this.props.value;
      console.log(input);
      Actions.requiredType(input);

    } else {
      return;
    }
  }

  render() {
    let { type, name, value } = this.props;

    return (
      <div className="input">
        <label>
        {value} <input type={type}
                 name={name}
                 onChange={this.inputHandler}
                 onKeyDown={this.pressEnterHandler}
                 />
        </label>
      </div>
    )
  }
}
