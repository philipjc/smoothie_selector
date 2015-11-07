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
};

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canGenerate: true,
      message: ''
    };

    this.generateSmoothie = this.generateSmoothie.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
  }

  // TODO Generate, Generated and Saved Smoothie, turn into one Component.
  // Call generate on Main? Or wrap in another operational Component...

  componentWillReceiveProps(props) {
    let amount = Number(props.amount);
    this.checkAmount(amount);
  }

  /**
  *
  */
  checkAmount(amount) {
    let { currentCards } = this.props;
    let generateMax = 7;
    let space = (generateMax - currentCards.length);

    if (amount > space) {
      this.setState({
        canGenerate: false
      });
      this.setMessage('Sorry, not enough space for ' + amount + ' more cards. You need to delete some.');

    } else {
      this.setState({
        canGenerate: true
      });
      this.setMessage('Can\'t wait to see what we get!');
    }
  }

  /**
  *
  */
  generateSmoothie() {
    let { type, amount, liquid, extras } = this.props;
    if (!type || !amount || !liquid || !extras) { return };

    if (this.state.canGenerate) {
      this.setMessage('Any good?');
      Actions.findIngredients(type, amount, liquid, extras);
    }
  }

  /**
  *
  */
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
