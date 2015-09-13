import React from 'react';

// Components ====================
import Input from './parts/Input.jsx';
import Button from './parts/Button.jsx';

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let find = this.props.find;

    return (
      <div className="main-container__upper">
        <form>
          <Input type="checkbox" name="fruit-type" find={find} value="fruit" />
          <Input type="checkbox" name="veg-type" find={find} value="veg" />
          <Button type="submit" name="generate" find={find} />
        </form>
      </div>
    )
  }
}
