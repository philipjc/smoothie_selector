import React from 'react';

// Components ====================
import Input from './parts/Input.jsx';
import Button from './parts/Button.jsx';

// Reflux ===================================

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="section-mid__form">
        <form>
          <div className="section-mid__form--inputs">
            <Input type="radio" name="type" value="fruit" />
            <Input type="radio" name="type" value="vegetable" />
            <Input type="radio" name="type" value="mixed" />
          </div>

          <div className="section-mid__form--button">
            <Button type="submit" name="generate" recipeType={this.props.type} />
          </div>
        </form>
      </div>
    )
  }
}

GenerateSmoothie.propTypes = {
  type: React.PropTypes.string
}
