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
    console.log(type);
    Actions.findIngredients(type);
  }

  render() {
    let { type } = this.props.type;

    return (
      <div className="section-mid__form">
        <form>
          <div className="section-mid__form--inputs">
            <Input type="radio" name="type" value="fruit" />
            <Input type="radio" name="type" value="vegetable" />
            <Input type="radio" name="type" value="mixed" />
          </div>

          <div className="section-mid__form--button">
            <Button type="submit" name="generate" blend={this.generateSmoothie} />
          </div>
        </form>
      </div>
    )
  }
}

GenerateSmoothie.propTypes = {
  type: React.PropTypes.string
}
