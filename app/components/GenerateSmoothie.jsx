import React from 'react';

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

    let typeForm = {
      type: 'radio',
      name: 'type',
      values: ['fruit', 'vegetable', 'mixed']
    };

    let amountForm = {
      type: 'radio',
      name: 'amount',
      values: [1, 5, 7]
    };

    let liquidForm = {
      type: 'radio',
      name: 'liquid',
      values: ['water', 'milk', 'juice']
    };

    return (
      <div className="section-upper__form">

        <Form formConfig={typeForm} />
        <Form formConfig={amountForm} />
        <Form formConfig={liquidForm} />

        <div className="section-upper__form--button">
          <Button type="submit" name="generate" blend={this.generateSmoothie} />
        </div>
      </div>
    )
  }
}

GenerateSmoothie.propTypes = propTypes;
