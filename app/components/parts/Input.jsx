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
   * // TODO Set up user pushing Enter.
   */
  inputHandler(e) {
    let state = e.target.checked;

    this.setState({
      input: true
    });

    if (state) {
      let input = this.props.value;
      Actions.requiredType(input);

    } else {
      return;
    }
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
