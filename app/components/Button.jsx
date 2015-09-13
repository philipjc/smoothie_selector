import React from 'react';
import Actions from '../actions/SmoothieActions.js';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.generateSmoothie = this.generateSmoothie.bind(this);
  }

  generateSmoothie() {
    let type = 'veg';
    Actions.findIngredients(type);
  }

  render() {
    let type = this.props.type;
    if (type === 'generate') {
      return (
        <div className={'button__' + this.props.type}
             onClick={this.generateSmoothie}>
          Button
        </div>
      )
    } else {
      return (
        <button type={this.props.type} className={'button__' + this.props.type}>
          Not generate
        </button>
      )
    }
  }
}

Button.propTypes = {
  type: React.PropTypes.string
}
