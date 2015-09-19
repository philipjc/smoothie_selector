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
    Actions.findIngredients(type);
  }

  saveCard() {
    let data = this.props.ingredients;
    Actions.saveThisCard(data);
  }

// TODO Set default props rather than in render
// TODO re-blend btn. listen to type gen store for type prop
  render() {
    let { type, name, ...other } = this.props;
    // if (this.props.recipeType) {
      // let { type, name, recipeType } = this.props;
    // }

    if (name === 'generate') {
      return (
        <div className={'button-' + name}
             onClick={this.generateSmoothie}>
          Blend!!!!
        </div>
      );
    } else if (name === 'save-card') {
      return (
        <ul className={'button-' + name}>
          <li className="btn"
               onClick={this.saveCard}>
            Save Blend?
          </li>
          <li className="btn"
               onClick={this.saveCard}>
            todo Blend?
          </li>
        </ul>
      );

    } else {
      return (
        <button type={type} className={'button__' + name}>
          Default Button
        </button>
      );
    }
  }
}

Button.propTypes = {
  type: React.PropTypes.string
}
