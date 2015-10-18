import React from 'react';
import { TYPE_FORM, AMOUNT_FORM, LIQUID_FORM } from './constants/forms.js';

// Components ====================
import Input from './parts/Input.jsx';
import Button from './parts/Button.jsx';
import Form from './Form.jsx';

// Reflux ===================================
import Actions from '../actions/SmoothieActions.js';

const propTypes = {
  type: React.PropTypes.string
}

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);

    this.generateSmoothie = this.generateSmoothie.bind(this);
  }

  generateSmoothie() {
    // as long as length < amount ?
    let { type, amount, liquid, currentCards } = this.props;
    let difference = 7 - currentCards.length;

    if (!type) { return };
    if (currentCards.length === 7) {
      return;

    } else if (currentCards.length && currentCards.length < 7) {
      Actions.findIngredients(type, difference, liquid);

    } else {
      Actions.findIngredients(type, amount, liquid);
    }
  }

  render() {
    let { type, amount } = this.props.type;

    return (
      <div className="section-upper__form">

        <Form formConfig={TYPE_FORM} />
        <Form formConfig={AMOUNT_FORM} />
        <Form formConfig={LIQUID_FORM} />

        <div className="section-upper__form--button">
          <Button type="submit" name="generate" blend={this.generateSmoothie} />
        </div>
      </div>
    )
  }
}

GenerateSmoothie.propTypes = propTypes;
