import React from 'react';

// Components ====================
import Input from './parts/Input.jsx';
import Button from './parts/Button.jsx';

// Reflux ===================================
import GenerateStore from '../stores/GenerateStore.js';

export default class GenerateSmoothie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ''
    }

    this.handleGenerateChange = this.handleGenerateChange.bind(this);
  }

  componentWillMount() {
    let unSubscribe = GenerateStore.listen(this.handleGenerateChange);
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
      <form>
        <Input type="radio" name="type" value="fruit" />
      <Input type="radio" name="type" value="veg" />
    <Input type="radio" name="type" value="mixed" />

  <Button type="submit" name="generate" smoothie={smoothie} />
      </form>
    )
  }
}
