import React from 'react';
import Actions from '../../actions/SmoothieActions.js';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.generateSmoothie = this.generateSmoothie.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }

  generateSmoothie() {
    let type = this.props.recipeType;
    console.log(type);

    Actions.findIngredients(type);
  }

  saveCard() {
    let data = this.props.ingredients;
    console.log('saving', data);
    Actions.saveThisCard(data);
  }

// TODO Set default props rather than in render
  render() {
    console.log(this.props);
    let {type, name, ...other } = this.props;

    if (name === 'generate') {
      return (
        <div className={'button-' + name}
             onClick={this.generateSmoothie}>
          Blend!!!!
        </div>
      );
    } else if (name === 'save-card') {
      return (
        <div className={'button-' + name}
             onClick={this.saveCard}>
          Save Blend?
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

Button.propTypes = {
  type: React.PropTypes.string
}
