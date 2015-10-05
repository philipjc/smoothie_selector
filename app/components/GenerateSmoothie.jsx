import React from 'react';

// Components ====================
import Input from './parts/Input.jsx';
import Button from './parts/Button.jsx';

// Reflux ===================================
import Actions from '../actions/SmoothieActions.js';

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);

    this.generateSmoothie = this.generateSmoothie.bind(this);
  }

  generateSmoothie() {
    let type = this.props.type;
    if (!type) { return };
    Actions.findIngredients(type);
  }

  render() {
    let { type } = this.props.type;

    return (
      <div className="section-upper__form">

        <div className="section-upper__form-block">
          <form>
            <div className="section-upper__form--inputs">
              <Input type="radio" name="type" value="fruit" />
              <Input type="radio" name="type" value="vegetable" />
              <Input type="radio" name="type" value="mixed" />
            </div>
          </form>
        </div>

        <div className="section-upper__form-block">
          <form>
            <div className="section-upper__form--inputs">
              <Input type="radio" name="amount" value="1" />
              <Input type="radio" name="amount" value="4" />
              <Input type="radio" name="amount" value="7" />
            </div>
          </form>
        </div>

        <div className="section-upper__form--button">
          <Button type="submit" name="generate" blend={this.generateSmoothie} />
        </div>
      </div>
    )
  }
}

GenerateSmoothie.propTypes = {
  type: React.PropTypes.string
}
