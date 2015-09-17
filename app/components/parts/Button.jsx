import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.generateSmoothie = this.generateSmoothie.bind(this);
  }

  generateSmoothie() {
    let type = this.props.smoothie;
    console.log(type);

    Actions.findIngredients(type);
  }

  render() {
    let {type, name, smoothie } = this.props;

    if (name === 'generate') {
      return (
        <div className={'button-' + name}
             onClick={this.generateSmoothie}>
          Blend!!!!
        </div>
      )
    } else {
      return (
        <button type={type} className={'button__' + name}>
          Not generate
        </button>
      )
    }
  }
}

Button.propTypes = {
  type: React.PropTypes.string
}
