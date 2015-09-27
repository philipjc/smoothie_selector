import React from 'react';

// Reflux ===================================================
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
    let type = this.props.recipeType;
    Actions.findIngredients(type);
  }

// TODO Set default props rather than in render
  render() {
    let { type, name, ...other } = this.props;

    if (name === 'generate') {
      return (
        <div className={'button-' + name}
             onClick={this.generateSmoothie}>
          Blend!!!!
        </div>
      );
    } else if (name === 'save-card') {
      return (
        <div>
          <ul className={'button-' + name}>
            <li className="btn"
                onClick={this.props.save}>
                Save Blend?
            </li>
            <li className="btn"
                onClick={this.saveCard}>
                todo Blend?
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

Button.propTypes = {
  type: React.PropTypes.string
}
