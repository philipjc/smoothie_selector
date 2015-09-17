import React from 'react';

// Components ====================
import Input from './parts/Input.jsx';
import Button from './parts/Button.jsx';

// Reflux ===================================
import TypeSelectionStore from '../stores/TypeSelectionStore.js';

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    }

    this.handleGenerateChange = this.handleGenerateChange.bind(this);
  }

  componentWillMount() {
    let unSubscribe = TypeSelectionStore.listen(this.handleGenerateChange);
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  handleGenerateChange(type) {
    console.log(type);
    this.setState({
      type: type
    });
  }

  render() {
    let smoothie = this.state.type;

    return (
      <div className="section-mid__form">
        <form>
          <div className="section-mid__form--inputs">
            <Input type="radio" name="type" value="fruit" />
            <Input type="radio" name="type" value="vegetable" />
            <Input type="radio" name="type" value="mixed" />
          </div>

          <div className="section-mid__form--button">
            <Button type="submit" name="generate" smoothie={smoothie} />
          </div>
        </form>
      </div>
    )
  }
}
