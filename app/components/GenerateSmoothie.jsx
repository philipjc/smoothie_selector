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
    let { type, amount } = this.props;
    if (!type) { return };
    Actions.findIngredients(type, amount);
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
