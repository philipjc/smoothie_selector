import React from 'react';
import { TYPE_FORM, AMOUNT_FORM, LIQUID_FORM, EXTRAS_FORM } from './constants/forms.js';

// Components ====================
import Input from './parts/Input.jsx';
import BlendButton from './parts/BlendButton.jsx';
import Form from './Form.jsx';

// Reflux ===================================
import Actions from '../actions/SmoothieActions.js';

const propTypes = {
  type: React.PropTypes.string
}

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }

    this.generateSmoothie = this.generateSmoothie.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  // TODO Generate, Generated and Saved Smoothie, turn into one Component.
  // Call generate on Main? Or wrap in another operational Component...

  generateSmoothie() {
    // as long as length < amount ?
    let { type, amount, liquid, extras, currentCards } = this.props;
    let difference = 7 - currentCards.length;

    if (!type || !amount || !liquid || !extras) { return };

    if (currentCards.length === 7) {
      this.setMessage('You already have 7 smoothies, delete some?');
      return;

    } else if (currentCards.length && currentCards.length < 7) {
      // TODO place in Store
      let message = `You have room for ${difference} more smoothies.`;
      this.setMessage(message);
      Actions.findIngredients(type, difference, liquid, extras);

    } else {
      this.setMessage('Let\'s see what you got!')
      Actions.findIngredients(type, amount, liquid, extras);
    }
  }

  setMessage(message) {
    this.setState({
      message: message
    });
  }

  render() {
    let { type, amount } = this.props.type;

    return (
      <div>
        <div className="section-upper__form">
          <Form formConfig={TYPE_FORM} />
          <Form formConfig={AMOUNT_FORM} />
          <Form formConfig={LIQUID_FORM} />
          <Form formConfig={EXTRAS_FORM} />

        </div>
        <div className="section-upper__form">
          <BlendButton blend={this.generateSmoothie}
                       message={this.state.message}
                       />
        </div>
      </div>
    );
  }
}

GenerateSmoothie.propTypes = propTypes;
