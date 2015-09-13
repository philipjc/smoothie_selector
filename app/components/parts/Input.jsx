import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smoothieType: ''
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.pressEnterHandler = this.pressEnterHandler.bind(this);
  }

  inputHandler(e) {
    let state = e.target.checked;
    let input = this.props.value;

    if (state) {
      Actions.requiredType(input);
    }
  }

  pressEnterHandler(e) {
    if (e.key === 'Enter') {
      let type = this.props.find;

      Actions.findIngredients(type);

    } else {
      return;
    }
  }

  render() {
    let { type, name } = this.props;

    return (
      <div>
        <input type={type}
               name={name}
               onChange={this.inputHandler}
               onKeyDown={this.pressEnterHandler}
        />
      </div>
    )
  }
}
